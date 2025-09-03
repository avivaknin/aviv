
import React, { useState, useEffect, useRef } from 'react';
import { SendIcon, MicrophoneIcon } from './icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

// Add SpeechRecognition types for window object to avoid TS errors
interface IWindow extends Window {
  SpeechRecognition: any;
  webkitSpeechRecognition: any;
}
declare const window: IWindow;

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Check for Speech Recognition API support once
  const isSpeechSupported = typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  useEffect(() => {
    if (!isSpeechSupported) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    const recognition = recognitionRef.current;

    recognition.continuous = false; // Stop listening after the first phrase
    recognition.lang = 'he-IL';
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      // Automatically send the message upon successful transcription
      if (transcript.trim()) {
        onSendMessage(transcript.trim());
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        alert('כדי להשתמש בהכתבה קולית, יש לאשר גישה למיקרופון בדפדפן.');
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false); // Ensure listening state is reset
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [isSpeechSupported, onSendMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleToggleListening = () => {
    if (isLoading || !isSpeechSupported) return;

    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setInput(''); // Clear input before starting to listen
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
    }
  };

  const placeholderText = isListening ? "מקשיב..." : "מה תרצו לדעת?";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-2 bg-white border-t border-gray-200"
    >
      <div className="relative flex-grow">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholderText}
          className={`w-full p-3 pl-12 bg-white text-gray-900 placeholder-gray-500 border-2 border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ${isListening ? 'border-teal-500 shadow-lg' : ''}`}
          rows={1}
          disabled={isLoading || isListening}
          aria-label="תיבת טקסט לשאלה"
        />
        {isSpeechSupported && (
            <button
                type="button"
                onClick={handleToggleListening}
                disabled={isLoading}
                className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 ${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-gray-500 hover:bg-gray-100'}`}
                aria-label={isListening ? "הפסק הקלטה" : "התחל הקלטה קולית"}
            >
                <MicrophoneIcon className="w-6 h-6" />
            </button>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="mr-3 p-3 bg-teal-500 text-white rounded-full disabled:bg-gray-400 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
        aria-label="שלח שאלה"
      >
        {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
            <SendIcon className="w-6 h-6" />
        )}
      </button>
    </form>
  );
};

export default ChatInput;