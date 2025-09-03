
import React from 'react';
import ListButton from './ListButton';

interface GeneralQuestionsProps {
  onQuestionClick: (question: string) => void;
}

const generalQuestionsList = [
  'ספרי לי בדיחה',
  'מה מזג האוויר היום בתל אביב?',
  'מהן החדשות החשובות ביותר הבוקר?',
  'תני לי מתכון פשוט לעוגת שוקולד',
  'מי היה דוד בן-גוריון?',
  'תני לי טיפ שימושי לחיסכון בסוללה בטלפון',
];

const GeneralQuestions: React.FC<GeneralQuestionsProps> = ({ onQuestionClick }) => {
  const colorClasses = {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-600',
    hoverBorder: 'hover:border-slate-400',
  };

  return (
    <div className="mb-8 pb-6 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">או נסו שאלה כללית...</h3>
      <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {generalQuestionsList.map((question, index) => (
          <ListButton
            key={`gen-q-${index}`}
            text={question}
            onClick={() => onQuestionClick(question)}
            colorClasses={colorClasses}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralQuestions;
