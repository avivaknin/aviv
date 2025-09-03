
import React, { useState, useCallback, useRef, useEffect } from 'react';
import type { ChatMessage, MainCategory, SubCategory, ColorClasses, QuestionItem } from './types';
import { sendMessage } from './services/geminiService';
import Header from './components/Header';
import CategoryButton from './components/CategoryButton';
import ListButton from './components/ListButton';
import ChatMessageComponent from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import PasswordPrompt from './components/PasswordPrompt';
import { 
    PlusIcon,
    PencilIcon,
    TrashIcon,
    ArrowLongRightIcon
} from './components/icons';
import { getInitialCategories, generateId } from './data/categoriesData';

declare const html2canvas: any;
declare const jspdf: any;

const CHAT_STORAGE_KEY = 'digitalAssistantChatHistory';
const EDIT_MODE_PASSWORD = '2025';

const stripMarkdownForSpeech = (text: string): string => {
  if (!text) return '';
  return text
      // Remove bold markers but keep the text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      // Remove numbered list prefixes (e.g., "1. ")
      .replace(/^\s*\d+\.\s*/gm, '')
      // Remove bullet point prefixes (e.g., "* ")
      .replace(/^\s*\*\s*/gm, '')
      // Remove summary/fullAnswer tags just in case they slipped through
      .replace(/<\/?summary>|<\/?fullAnswer>/g, '')
      .trim();
};


const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const savedMessagesJSON = localStorage.getItem(CHAT_STORAGE_KEY);
      if (!savedMessagesJSON) return [];
      const savedMessages = JSON.parse(savedMessagesJSON) as ChatMessage[];
      return savedMessages.map(msg => ({ ...msg, isStreaming: false }));
    } catch (error) {
      console.error("Could not load messages from localStorage", error);
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingPdf, setIsSavingPdf] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
  const [categories, setCategories] = useState<MainCategory[]>(getInitialCategories);
  const [editMode, setEditMode] = useState<'off' | 'on'>('off');
  const [isPasswordPromptOpen, setIsPasswordPromptOpen] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [chatOrigin, setChatOrigin] = useState<{ category: MainCategory; subCategory: SubCategory } | null>(() => {
    // Attempt to load chatOrigin from localStorage as well
    try {
        const savedOriginJSON = localStorage.getItem('chatOrigin');
        return savedOriginJSON ? JSON.parse(savedOriginJSON) : null;
    } catch (error) {
        console.error("Could not load chatOrigin from localStorage", error);
        return null;
    }
  });
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    try {
      if (messages.length > 0) {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
        if (chatOrigin) {
            localStorage.setItem('chatOrigin', JSON.stringify(chatOrigin));
        }
      } else {
        localStorage.removeItem(CHAT_STORAGE_KEY);
        localStorage.removeItem('chatOrigin');
      }
    } catch (error) {
      console.error("Could not save state to localStorage", error);
    }
  }, [messages, chatOrigin]);

  useEffect(() => {
    if (selectedCategory) {
        const freshCategory = categories.find(c => c.id === selectedCategory.id);
        if (!freshCategory) {
            setSelectedCategory(null);
            setSelectedSubCategory(null);
        } else {
            if (JSON.stringify(freshCategory) !== JSON.stringify(selectedCategory)) {
                setSelectedCategory(freshCategory);
            }
            if (selectedSubCategory) {
                const freshSubCategory = freshCategory.subCategories.find(s => s.id === selectedSubCategory.id);
                if (!freshSubCategory) {
                    setSelectedSubCategory(null);
                } else if (JSON.stringify(freshSubCategory) !== JSON.stringify(selectedSubCategory)) {
                    setSelectedSubCategory(freshSubCategory);
                }
            }
        }
    }
  }, [categories, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    // Cleanup speech synthesis on component unmount
    return () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    };
  }, []);

  const handleToggleSpeech = useCallback((messageId: string, textToSpeak: string) => {
    if (!('speechSynthesis' in window)) return;
    
    // If the currently speaking message is THIS message, stop it.
    if (speakingMessageId === messageId) {
        window.speechSynthesis.cancel();
        setSpeakingMessageId(null);
        return;
    }

    // If any other message is speaking, stop it before starting the new one.
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    const cleanText = stripMarkdownForSpeech(textToSpeak);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'he-IL';
    
    // When speech ends naturally or is cancelled, clear the speaking ID.
    utterance.onend = () => {
        setSpeakingMessageId(null);
    };

    utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
        console.error('SpeechSynthesisUtterance.onerror:', event.error);
        setSpeakingMessageId(null);
    };
    
    setSpeakingMessageId(messageId);
    window.speechSynthesis.speak(utterance);
  }, [speakingMessageId]);

  const handleSendMessage = useCallback(async (text: string, isExpansion = false) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: isExpansion ? `הרחיבי בבקשה על הנושא: "${text}"` : text,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    if (!isExpansion && messages.length === 0) {
        setSelectedCategory(null);
        setSelectedSubCategory(null);
    } else if (isExpansion && messages.length > 0 && !chatOrigin) {
        setChatOrigin(null);
    }

    const modelMessageId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: modelMessageId, role: 'model', text: '', isStreaming: true, sources: [] },
    ]);

    let accumulatedResponse = '';
    let sources: any[] = [];
    
    await sendMessage(text, (chunk) => {
        if (chunk.text) {
          accumulatedResponse += chunk.text;
        }
        if (chunk.sources && chunk.sources.length > 0) {
            sources = [...chunk.sources];
        }

        const summaryStartTag = "<summary>";
        const summaryEndTag = "</summary>";
        let streamingSummary = "";
        
        const summaryStartIndex = accumulatedResponse.indexOf(summaryStartTag);
        
        if (summaryStartIndex !== -1) {
            const summaryContentStartIndex = summaryStartIndex + summaryStartTag.length;
            const summaryEndIndex = accumulatedResponse.indexOf(summaryEndTag, summaryContentStartIndex);

            if (summaryEndIndex !== -1) {
                streamingSummary = accumulatedResponse.substring(summaryContentStartIndex, summaryEndIndex);
            } else {
                streamingSummary = accumulatedResponse.substring(summaryContentStartIndex);
            }
        }

        setMessages((prev) =>
            prev.map((msg) =>
            msg.id === modelMessageId 
            ? { ...msg, text: streamingSummary, isStreaming: true, sources } 
            : msg
            )
        );
    });

    const summaryMatch = accumulatedResponse.match(/<summary>([\s\S]*?)<\/summary>/);
    const fullAnswerMatch = accumulatedResponse.match(/<fullAnswer>([\s\S]*?)<\/fullAnswer>/);

    const summary = summaryMatch ? summaryMatch[1].trim() : '';
    const fullAnswer = fullAnswerMatch ? fullAnswerMatch[1].trim() : '';
    
    const hasCustomSummary = !!summary && !!fullAnswer;
    
    let finalDisplayText = '';
    let finalFullText: string | undefined = undefined;

    if (hasCustomSummary) {
        finalDisplayText = summary;
        finalFullText = fullAnswer;
    } else {
        finalDisplayText = accumulatedResponse.replace(/<summary>([\s\S]*?)<\/summary>|<fullAnswer>([\s\S]*?)<\/fullAnswer>/g, "").trim();
    }

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === modelMessageId ? { 
            ...msg, 
            isStreaming: false, 
            text: finalDisplayText,
            fullText: finalFullText,
            sources 
        } : msg
      )
    );
    setIsLoading(false);
  }, [messages.length, chatOrigin]);

  const handleQuestionSelect = (question: QuestionItem) => {
    if (selectedCategory && selectedSubCategory) {
        setChatOrigin({ category: selectedCategory, subCategory: selectedSubCategory });
        handleSendMessage(question.text);
    }
  };

  const handleReturnToQuestions = () => {
    if (chatOrigin) {
        const categoryFromOrigin = categories.find(c => c.id === chatOrigin.category.id);
        if (categoryFromOrigin) {
            const subCategoryFromOrigin = categoryFromOrigin.subCategories.find(s => s.id === chatOrigin.subCategory.id);
            if (subCategoryFromOrigin) {
                setSelectedCategory(categoryFromOrigin);
                setSelectedSubCategory(subCategoryFromOrigin);
            }
        }
        setMessages([]);
        setChatOrigin(null);
    }
  };


  const handleExpandQuery = useCallback((text: string) => {
    handleSendMessage(text, true);
  }, [handleSendMessage]);

  const handleCategoryClick = (category: MainCategory) => {
    setSelectedCategory(category);
  };
  
  const handleSubCategoryClick = (subCat: SubCategory) => {
    if (subCat.linkedCategoryId) {
      const linkedCategory = categories.find(c => c.id === subCat.linkedCategoryId);
      if (linkedCategory) {
        setSelectedCategory(linkedCategory);
        setSelectedSubCategory(null);
        return;
      }
    }
    setSelectedSubCategory(subCat);
  };

  // --- Edit Mode Logic ---

  const handleToggleEdit = () => {
    if (editMode === 'on') {
        setEditMode('off');
    } else {
        setIsPasswordPromptOpen(true);
    }
  };

  const handlePasswordConfirm = (password: string) => {
    if (password === EDIT_MODE_PASSWORD) {
        setEditMode('on');
        setIsPasswordPromptOpen(false);
    } else {
        alert('סיסמה שגויה. נסה/י שוב.');
    }
  };

  const handleAdd = (type: 'main' | 'sub' | 'question') => {
    const text = prompt(`הכנס את הטקסט עבור ${type === 'main' ? 'הקטגוריה הראשית' : type === 'sub' ? 'תת הקטגוריה' : 'השאלה'} החדשה:`);
    if (!text) return;

    setCategories(prev => {
        if (type === 'main') {
            const newCategory: MainCategory = {
                id: generateId(),
                text,
                icon: PlusIcon,
                colorClasses: { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', hoverBorder: 'hover:border-gray-500' },
                subCategories: []
            };
            return [...prev, newCategory];
        } 
        if (type === 'sub' && selectedCategory) {
            const newSubCategory: SubCategory = { 
                id: generateId(), 
                text, 
                questions: [],
                icon: selectedCategory.displayMode === 'grid' ? PlusIcon : undefined,
                colorClasses: selectedCategory.displayMode === 'grid' ? { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', hoverBorder: 'hover:border-gray-500' } : undefined
            };
            return prev.map(cat => 
                cat.id === selectedCategory.id
                ? { ...cat, subCategories: [...cat.subCategories, newSubCategory] } 
                : cat
            );
        } 
        if (type === 'question' && selectedCategory && selectedSubCategory) {
            const newQuestion: QuestionItem = { id: generateId(), text };
            return prev.map(cat => 
                cat.id === selectedCategory.id ? {
                    ...cat,
                    subCategories: cat.subCategories.map(sub => 
                        sub.id === selectedSubCategory.id 
                        ? { ...sub, questions: [...(sub.questions || []), newQuestion] } 
                        : sub)
                } : cat
            );
        }
        return prev;
    });
  };

  const handleEdit = (type: 'main' | 'sub' | 'question', id: string, currentText: string) => {
    const newText = prompt('ערוך את הטקסט:', currentText);
    if (!newText || newText === currentText) return;
  
    setCategories(prev => {
      return prev.map(mainCat => {
        if (type === 'main' && mainCat.id === id) {
          return { ...mainCat, text: newText };
        }
        if (type === 'sub' || type === 'question') {
          return {
            ...mainCat,
            subCategories: mainCat.subCategories.map(subCat => {
              if (type === 'sub' && subCat.id === id) {
                return { ...subCat, text: newText };
              }
              if (type === 'question' && subCat.questions) {
                return {
                  ...subCat,
                  questions: subCat.questions.map(q => q.id === id ? { ...q, text: newText } : q),
                };
              }
              return subCat;
            }),
          };
        }
        return mainCat;
      });
    });
  };
  
  const handleDelete = (type: 'main' | 'sub' | 'question', id: string) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק?')) return;
  
    setCategories(prev => {
      if (type === 'main') {
        return prev.filter(cat => cat.id !== id);
      }
      return prev.map(mainCat => {
        if (type === 'sub') {
          return {
            ...mainCat,
            subCategories: mainCat.subCategories.filter(sub => sub.id !== id),
          };
        }
        if (type === 'question') {
          return {
            ...mainCat,
            subCategories: mainCat.subCategories.map(sub => ({
              ...sub,
              questions: (sub.questions || []).filter(q => q.id !== id),
            })),
          };
        }
        return mainCat;
      });
    });
  };

  // --- Export/Import Handlers ---

  const processImportedCategories = (parsedData: any[]): MainCategory[] => {
    if (!Array.isArray(parsedData)) {
      throw new Error('המבנה הבסיסי של הקובץ צריך להיות מערך (array).');
    }
    const initialCategories = getInitialCategories();

    return parsedData.map((cat: any): MainCategory => {
      if (!cat.text || !cat.subCategories) {
        throw new Error('לכל קטגוריה ראשית חייב להיות שדה "text" ו-"subCategories".');
      }
      const correspondingInitialCat = initialCategories.find(c => c.id === cat.id);

      return {
        ...cat,
        id: cat.id || generateId(),
        subCategories: (cat.subCategories || []).map((sub: any) => ({
          ...sub,
          id: sub.id || generateId(),
          questions: (sub.questions || []).map((q: any) => typeof q === 'string' ? { id: generateId(), text: q } : { ...q, id: q.id || generateId() })
        })),
        icon: correspondingInitialCat ? correspondingInitialCat.icon : PlusIcon,
        colorClasses: correspondingInitialCat ? correspondingInitialCat.colorClasses : { bg: 'bg-gray-100', border: 'border-gray-200', text: 'text-gray-500', hoverBorder: 'hover:border-gray-400' },
      };
    });
  };
  
  const handleImportJson = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const jsonContent = event.target?.result as string;
                if (!jsonContent) throw new Error("הקובץ ריק.");
                
                const parsedData = JSON.parse(jsonContent);
                const rehydratedCategories = processImportedCategories(parsedData);

                setCategories(rehydratedCategories);
                setSelectedCategory(null);
                setSelectedSubCategory(null);
                alert('הקטגוריות יובאו בהצלחה!');

            } catch (error) {
                console.error("Error importing JSON:", error);
                alert(`שגיאה בייבוא הקובץ: ${error instanceof Error ? error.message : 'שגיאה לא ידועה'}`);
            }
        };
        reader.onerror = () => {
            alert('שגיאה בקריאת הקובץ.');
        };
        reader.readAsText(file);
    };
    input.click();
  };

  const handleImportTs = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.ts';
    input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const tsContent = event.target?.result as string;
                if (!tsContent) throw new Error("הקובץ ריק.");

                const assignment = 'const rehydratedCategories = ';
                const startIndex = tsContent.indexOf(assignment);
                if (startIndex === -1) {
                    throw new Error("פורמט קובץ TS לא תקין. לא נמצא המשתנה 'rehydratedCategories'.");
                }

                const jsonStartIndex = startIndex + assignment.length;
                const endIndex = tsContent.indexOf(';', jsonStartIndex);
                if (endIndex === -1) {
                    throw new Error("פורמט קובץ TS לא תקין. חסר ';' בסוף הצהרת המשתנה.");
                }

                const jsonString = tsContent.substring(jsonStartIndex, endIndex);
                
                const parsedData = JSON.parse(jsonString);
                const rehydratedCategories = processImportedCategories(parsedData);

                setCategories(rehydratedCategories);
                setSelectedCategory(null);
                setSelectedSubCategory(null);
                alert('הקטגוריות יובאו בהצלחה מקובץ TS!');

            } catch (error) {
                console.error("Error importing TS file:", error);
                alert(`שגיאה בייבוא קובץ ה-TS: ${error instanceof Error ? error.message : 'שגיאה לא ידועה'}`);
            }
        };
        reader.onerror = () => {
            alert('שגיאה בקריאת הקובץ.');
        };
        reader.readAsText(file, 'UTF-8');
    };
    input.click();
  };

  const handleSaveJson = () => {
    const replacer = (key: string, value: any) => {
        if (key === 'icon' || key === 'colorClasses' || key === 'displayMode') {
            return undefined;
        }
        return value;
    };
    
    const jsonString = JSON.stringify(categories, replacer, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'categories-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExportTs = () => {
    const replacer = (key: string, value: any) => {
        if (key === 'icon' || key === 'colorClasses' || key === 'displayMode') {
            return undefined;
        }
        return value;
    };
    
    const tsString = `// This is a generated file. Do not edit manually.
// To import these categories, use the "Import TS" button in the app's edit mode.

const rehydratedCategories = ${JSON.stringify(categories, replacer, 2)};
`;
    
    const blob = new Blob([tsString], { type: 'application/typescript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'categoriesData.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleExportCsv = () => {
    const rows: string[][] = [];
    
    categories.forEach(mainCat => {
        (mainCat.subCategories || []).forEach(subCat => {
            const questions = subCat.questions || [];
            if (questions.length === 0) {
                rows.push([mainCat.text, subCat.text, '']);
            } else {
                questions.forEach(q => {
                    rows.push([mainCat.text, subCat.text, q.text]);
                });
            }
        });
    });

    const escapeCsvCell = (cell: string) => `"${(cell || '').replace(/"/g, '""')}"`;

    const headers = ['category', 'sub_category', 'question'].map(escapeCsvCell).join(',');
    const csvRows = rows.map(row => row.map(escapeCsvCell).join(','));

    const csvContent = [headers, ...csvRows].join('\n');
    
    const blob = new Blob([`\uFEFF${csvContent}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'categories-backup.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleNewChat = () => {
    setMessages([]);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setChatOrigin(null);
  };

  const handleResetCategories = () => {
    if (window.confirm('האם את/ה בטוח/ה שברצונך לאפס את כל הקטגוריות לברירת המחדל? כל השינויים שביצעת יימחקו.')) {
        setCategories(getInitialCategories());
        setSelectedCategory(null);
        setSelectedSubCategory(null);
    }
  };

  const handleSavePdf = async () => {
    setIsSavingPdf(true);
    const chatContainer = document.getElementById('chat-content-area');
    if (!chatContainer) {
      console.error('Chat container not found');
      setIsSavingPdf(false);
      return;
    }

    try {
      const canvas = await html2canvas(chatContainer, {
        scale: 2,
        useCORS: true,
        scrollY: -window.scrollY,
      });

      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = jspdf;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / pdfWidth;
      const scaledHeight = imgHeight / ratio;

      let heightLeft = scaledHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft > 0) {
        position -= pdf.internal.pageSize.getHeight();
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      
      pdf.save('digital-assistant-chat.pdf');

    } catch (error) {
      console.error("Failed to save PDF:", error);
      alert("מצטער, הייתה בעיה ביצירת קובץ ה-PDF.");
    } finally {
      setIsSavingPdf(false);
    }
  };

  const renderContent = () => {
    const isEditing = editMode === 'on';
    if (messages.length > 0) {
      return (
        <>
          {chatOrigin && (
            <button
              onClick={handleReturnToQuestions}
              className="self-start mb-6 text-teal-600 transition-colors hover:text-teal-800 font-semibold flex items-center gap-2"
              aria-label={`חזרה לרשימת השאלות בנושא ${chatOrigin.subCategory.text}`}
            >
              <ArrowLongRightIcon className="w-5 h-5" />
              <span>חזרה לשאלות</span>
            </button>
          )}
          {messages.map((msg, index) => (
            <ChatMessageComponent 
              key={msg.id} 
              message={msg} 
              onExpandQuery={() => handleExpandQuery(msg.fullText || msg.text)}
              isLastMessage={index === messages.length - 1}
              speakingMessageId={speakingMessageId}
              onToggleSpeech={handleToggleSpeech}
            />
          ))}
          <div ref={chatEndRef} />
        </>
      );
    }

    if (selectedCategory && selectedSubCategory) {
        const SubCategoryIcon = selectedSubCategory.icon;
        
        let subCategoryColors = selectedCategory.colorClasses;
        if (selectedCategory) {
            for (const sub of selectedCategory.subCategories) {
                if (sub.isHeading) {
                    subCategoryColors = sub.colorClasses || selectedCategory.colorClasses;
                }
                if (sub.id === selectedSubCategory.id) {
                    break;
                }
            }
        }

        return (
            <div className="flex flex-col items-center">
                <button
                onClick={() => setSelectedSubCategory(null)}
                className={`self-start mb-6 transition-colors font-semibold ${subCategoryColors.text.replace('text-', 'hover:text-').replace(/-\d+$/, '-800')} flex items-center gap-2`}
                aria-label={`חזרה ל${selectedCategory.text}`}
              >
                <ArrowLongRightIcon className="w-5 h-5" />
                <span>{`חזרה ל${selectedCategory.text}`}</span>
              </button>
              <div className={`flex items-center justify-center gap-3 mb-2 ${subCategoryColors.text}`}>
                {SubCategoryIcon && <SubCategoryIcon className="w-8 h-8" />}
                <h2 className="text-2xl font-semibold">{selectedSubCategory.text}</h2>
              </div>
              <h3 className="text-lg text-gray-500 mb-6">{selectedCategory.text}</h3>
              <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedSubCategory.questions?.map((question) => (
                    <ListButton
                        key={question.id}
                        text={question.text}
                        onClick={() => handleQuestionSelect(question)}
                        colorClasses={subCategoryColors}
                        isEditing={isEditing}
                        onEdit={() => handleEdit('question', question.id, question.text)}
                        onDelete={() => handleDelete('question', question.id)}
                    />
                ))}
                {isEditing && (
                  <div className="sm:col-span-2">
                    <ListButton text="הוסף שאלה חדשה" icon={<PlusIcon className="w-6 h-6" />} onClick={() => handleAdd('question')} colorClasses={{ bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-500', hoverBorder: 'hover:border-gray-400' }} />
                  </div>
                )}
              </div>
            </div>
        )
    }

    if (selectedCategory) {
        const CategoryIcon = selectedCategory.icon;

        const handleBackFromCategory = () => {
          if (selectedCategory?.parentId) {
              const parentCategory = categories.find(c => c.id === selectedCategory.parentId);
              setSelectedCategory(parentCategory || null);
          } else {
              setSelectedCategory(null);
          }
        };

        const getBackFromCategoryText = () => {
            if (selectedCategory?.parentId) {
                 const parentCategory = categories.find(c => c.id === selectedCategory.parentId);
                 return `חזרה ל${parentCategory?.text || 'קטגוריות'}`;
            }
            return 'חזרה לכל הקטגוריות';
        };

        return (
            <div className="flex flex-col items-center">
                <button
                    onClick={handleBackFromCategory}
                    className="self-start mb-6 text-teal-600 transition-colors hover:text-teal-800 font-semibold flex items-center gap-2"
                    aria-label={getBackFromCategoryText()}
                >
                    <ArrowLongRightIcon className="w-5 h-5" />
                    <span>{getBackFromCategoryText()}</span>
                </button>
                <div className={`flex items-center justify-center gap-4 mb-6 ${selectedCategory.colorClasses.text}`}>
                    {CategoryIcon && <CategoryIcon className="w-10 h-10" />}
                    <h2 className="text-3xl font-bold">{selectedCategory.text}</h2>
                </div>
                
                {selectedCategory.displayMode === 'grid' ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                        {selectedCategory.subCategories.map((subCat) => (
                            <CategoryButton
                                key={subCat.id}
                                icon={subCat.icon}
                                text={subCat.text}
                                onClick={() => handleSubCategoryClick(subCat)}
                                colorClasses={subCat.colorClasses}
                                isEditing={isEditing}
                                onEdit={() => handleEdit('sub', subCat.id, subCat.text)}
                                onDelete={() => handleDelete('sub', subCat.id)}
                            />
                        ))}
                        {isEditing && <CategoryButton text="הוסף תת-קטגוריה" icon={PlusIcon} onClick={() => handleAdd('sub')} colorClasses={{ bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', hoverBorder: 'hover:border-gray-500' }} />}
                    </div>
                ) : (
                    <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(() => {
                            let currentHeadingColors = selectedCategory.colorClasses;
                            return selectedCategory.subCategories.map((subCat) => {
                                if (subCat.isHeading) {
                                    currentHeadingColors = subCat.colorClasses || selectedCategory.colorClasses;
                                    const HeadingIcon = subCat.icon;
                                    return (
                                        <div key={subCat.id} className="sm:col-span-2 mt-4 first:mt-0 relative group">
                                            <div className={`flex items-center gap-3 border-b-2 ${currentHeadingColors.border} pb-2 mb-2`}>
                                                {HeadingIcon && <HeadingIcon className={`w-7 h-7 ${currentHeadingColors.text}`} />}
                                                <h3 className={`text-xl font-bold ${currentHeadingColors.text}`}>{subCat.text}</h3>
                                            </div>
                                            {isEditing && (
                                                <div className="absolute top-0 left-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => handleEdit('sub', subCat.id, subCat.text)} className="p-1.5 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Edit Heading"><PencilIcon className="w-4 h-4" /></button>
                                                    <button onClick={() => handleDelete('sub', subCat.id)} className="p-1.5 bg-red-100 text-red-600 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500" aria-label="Delete Heading"><TrashIcon className="w-4 h-4" /></button>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                const SubCategoryIcon = subCat.icon ? <subCat.icon className="w-6 h-6" /> : undefined;
                                return (
                                    <ListButton
                                        key={subCat.id}
                                        text={subCat.text}
                                        icon={SubCategoryIcon}
                                        onClick={() => handleSubCategoryClick(subCat)}
                                        colorClasses={currentHeadingColors}
                                        isEditing={isEditing}
                                        onEdit={() => handleEdit('sub', subCat.id, subCat.text)}
                                        onDelete={() => handleDelete('sub', subCat.id)}
                                    />
                                );
                            });
                        })()}
                        {isEditing && (
                            <div className="sm:col-span-2">
                                <ListButton text="הוסף תת-קטגוריה" icon={<PlusIcon className="w-6 h-6" />} onClick={() => handleAdd('sub')} colorClasses={{ bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-500', hoverBorder: 'hover:border-gray-400' }} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">במה אוכל לעזור היום?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.filter(cat => !cat.isHidden).map((cat) => (
                <CategoryButton
                    key={cat.id}
                    icon={cat.icon}
                    text={cat.text}
                    onClick={() => handleCategoryClick(cat)}
                    colorClasses={cat.colorClasses}
                    isEditing={isEditing}
                    onEdit={() => handleEdit('main', cat.id, cat.text)}
                    onDelete={() => handleDelete('main', cat.id)}
                />
            ))}
            {isEditing && <CategoryButton text="הוסף קטגוריה חדשה" icon={PlusIcon} onClick={() => handleAdd('main')} colorClasses={{ bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-700', hoverBorder: 'hover:border-gray-500' }} />}
            </div>
        </>
    )
  }


  return (
    <div className="bg-slate-50 h-full font-sans text-gray-800">
      <div className="w-full max-w-4xl mx-auto flex flex-col h-full">
        <Header 
          className="print:hidden"
          onSaveJson={handleSaveJson}
          onImportJson={handleImportJson}
          onExportTs={handleExportTs}
          onImportTs={handleImportTs}
          onExportCsv={handleExportCsv}
          onNewChat={handleNewChat}
          onSavePdf={handleSavePdf}
          isSavingPdf={isSavingPdf}
          isChatActive={messages.length > 0}
          isEditing={editMode === 'on'}
          onToggleEdit={handleToggleEdit}
          onResetCategories={handleResetCategories}
        />
        <main className="flex-grow min-h-0 overflow-y-auto p-4 sm:p-6 flex flex-col">
          <div id="chat-content-area" className="flex-grow">
            {renderContent()}
          </div>
        </main>
        <footer className="w-full bg-slate-50 border-t border-gray-200 print:hidden">
            <div className="mx-auto">
              <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
            </div>
        </footer>
      </div>
      <PasswordPrompt
        isOpen={isPasswordPromptOpen}
        onClose={() => setIsPasswordPromptOpen(false)}
        onConfirm={handlePasswordConfirm}
        title="כניסה למצב עריכה"
        message="כדי להיכנס למצב עריכה, יש להזין את סיסמת הניהול."
      />
    </div>
  );
};

export default App;