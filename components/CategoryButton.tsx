
import React from 'react';
import { PencilIcon, TrashIcon } from './icons';
import type { ColorClasses } from '../types';

interface CategoryButtonProps {
  icon?: React.FC<{ className?: string }>;
  text: string;
  onClick: () => void;
  colorClasses?: ColorClasses;
  isEditing?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ icon: IconComponent, text, onClick, colorClasses, isEditing, onEdit, onDelete }) => {
  const colors = colorClasses || {
    bg: 'bg-white',
    border: 'border-teal-200',
    text: 'text-teal-600',
    hoverBorder: 'hover:border-teal-400',
  };

  const isEditable = isEditing && onEdit && onDelete;

  // By making the root a non-clickable relative container, and putting the edit buttons
  // as a sibling to the main clickable div, we ensure that clicks on the edit buttons
  // will not trigger the main onClick navigation, as they are not descendants.
  return (
    <div
      className="relative w-full h-full group transition-all duration-200 ease-in-out transform hover:-translate-y-1"
    >
      {/* Visual & Clickable Element for Navigation */}
      <div
        onClick={onClick}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
        role="button"
        tabIndex={0}
        aria-label={text}
        className={`w-full h-full flex flex-col items-center justify-center text-center p-2 border-2 rounded-lg shadow-md group-hover:shadow-lg ${colors.bg} ${colors.border} ${colors.hoverBorder} cursor-pointer`}
      >
        {IconComponent && (
          <div className={`mb-1 ${colors.text}`}>
            <IconComponent className="w-12 h-12" />
          </div>
        )}
        <span className={`font-semibold text-lg h-10 flex items-center justify-center ${colors.text}`}>{text}</span>
      </div>

      {/* Edit/Delete buttons as a separate sibling overlay */}
      {isEditable && (
        <div className="absolute top-1 left-1 flex gap-1 z-10">
          <button
            onClick={onEdit}
            className="p-1.5 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`ערוך ${text}`}
          >
            <PencilIcon className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 bg-red-100 text-red-600 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label={`מחק ${text}`}
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryButton;