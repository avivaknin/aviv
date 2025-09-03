import React, { useMemo, useState } from 'react';
import type { ChatMessage, MainCategory, SubCategory } from '../types';
import { SparklesIcon, ChevronDownIcon, ChevronUpIcon, SpeakerWaveIcon, StopCircleIcon } from './icons';

interface ChatMessageProps {
  message: ChatMessage;
  onExpandQuery: (text: string) => void;
  isLastMessage?: boolean;
  speakingMessageId: string | null;
  onToggleSpeech: (messageId: string, textToSpeak: string) => void;
}

const parseMarkdown = (text: string) => {
  const lines = text.split('\n');
  return lines.map((line, index) => {
    if (line.startsWith('**') && line.endsWith('**')) {
        return <strong key={index} className="font-bold">{line.substring(2, line.length - 2)}</strong>;
    }
    if (/^\d+\./.test(line)) {
      return <p key={index} className="mb-1">{line}</p>;
    }
    if (line.startsWith('* ')) {
        return <li key={index} className="ml-4 list-disc">{line.substring(2)}</li>
    }
    return <p key={index}>{line}</p>;
  });
};

const getHostnameFromUri = (uri: string): string => {
    if (!uri || typeof uri !== 'string') {
        return 'קישור לא תקין';
    }
    try {
        const url = new URL(uri);
        // Remove 'www.' if it exists for a cleaner look
        return url.hostname.replace(/^www\./, '');
    } catch (e) {
        console.error("Invalid URL received for source:", uri);
        // Fallback for invalid URLs
        return uri.length > 30 ? uri.substring(0, 27) + '...' : uri;
    }
};

const ChatMessageComponent: React.FC<ChatMessageProps> = ({ message, onExpandQuery, isLastMessage, speakingMessageId, onToggleSpeech }) => {
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);
  const isModel = message.role === 'model';
  const hasSummary = isModel && !!message.fullText && message.text !== message.fullText;

  const displayText = hasSummary && !isAnswerExpanded ? message.text : (message.fullText || message.text);
  const contentToExpandWithAI = message.fullText || message.text;
  
  const parsedContent = useMemo(() => parseMarkdown(displayText), [displayText]);
  const uniqueSources = useMemo(() => {
    if (!message.sources) return [];
    const seen = new Set<string>();
    return message.sources.filter(source => {
      // Ensure source and source.uri are valid before processing
      if (!source || !source.uri || typeof source.uri !== 'string' || seen.has(source.uri)) {
        return false;
      }
      seen.add(source.uri);
      return true;
    });
  }, [message.sources]);

  const isSpeechSupported = 'speechSynthesis' in window;
  const isSpeaking = speakingMessageId === message.id;

  return (
    <div className={`chat-message-container flex my-3 ${isModel ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`p-4 rounded-2xl max-w-xl lg:max-w-2xl ${
          isModel
            ? 'bg-gray-100 text-gray-800 rounded-br-none'
            : 'bg-teal-500 text-white rounded-bl-none'
        }`}
      >
        <div className="whitespace-pre-wrap leading-relaxed">
            {parsedContent}
            {message.isStreaming && <span className="inline-block w-2 h-4 bg-gray-600 animate-pulse ml-1" />}
        </div>
        
        {isModel && !message.isStreaming && message.text && (
            <div className="mt-4">
                <div className="flex items-center gap-4 flex-wrap">
                    {hasSummary && (
                        <button
                            onClick={() => setIsAnswerExpanded(!isAnswerExpanded)}
                            className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors"
                        >
                            {isAnswerExpanded ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                            <span>{isAnswerExpanded ? 'הצג תקציר' : 'הרחב את התשובה'}</span>
                        </button>
                    )}

                    <button
                        onClick={() => onExpandQuery(contentToExpandWithAI)}
                        className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors"
                    >
                        <SparklesIcon className="w-4 h-4" />
                        <span>הרחב עם AI</span>
                    </button>
                    
                    {isSpeechSupported && (
                      <button
                        onClick={() => onToggleSpeech(message.id, displayText)}
                        className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors"
                        aria-label={isSpeaking ? 'הפסק קריאה' : 'הקרא טקסט'}
                      >
                        {isSpeaking ? <StopCircleIcon className="w-5 h-5" /> : <SpeakerWaveIcon className="w-5 h-5" />}
                        <span>{isSpeaking ? 'עצור' : 'הקרא'}</span>
                      </button>
                    )}
                </div>

                {uniqueSources.length > 0 && (!hasSummary || isAnswerExpanded) && (
                    <div className="w-full pt-3 mt-3 border-t border-gray-200">
                        <h4 className="font-semibold text-sm text-gray-600 mb-2">מקורות מידע:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            {uniqueSources.map((source, index) => (
                                <li key={index}>
                                    <a 
                                        href={source.uri} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline text-sm"
                                        title={source.uri}
                                    >
                                        {source.title || getHostnameFromUri(source.uri)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessageComponent;