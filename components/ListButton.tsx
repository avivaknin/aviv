
import React from 'react';
import type { ColorClasses } from '../types';
import { PencilIcon, TrashIcon } from './icons';

interface ListButtonProps {
  text: string;
  onClick: () => void;
  colorClasses: ColorClasses;
  icon?: React.ReactNode;
  isEditing?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ListButton: React.FC<ListButtonProps> = ({ text, onClick, colorClasses, icon, isEditing, onEdit, onDelete }) => {
  const isEditable = isEditing && onEdit && onDelete;

  // By making the root a non-clickable relative container, and putting the edit buttons
  // as a sibling to the main clickable div, we ensure that clicks on the edit buttons
  // will not trigger the main onClick navigation, as they are not descendants.
  return (
    <div
      className={`relative w-full group transition-all duration-200 ease-in-out transform hover:bg-gray-50 rounded-lg`}
    >
        {/* This div is the main button for navigation */}
        <div 
          onClick={onClick}
          className={`flex items-center text-right p-4 bg-white border-2 rounded-lg shadow-sm group-hover:shadow-md ${colorClasses.border} ${colorClasses.hoverBorder} cursor-pointer`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
          aria-label={text}
        >
            {icon && <span className={`ml-4 ${colorClasses.text}`}>{icon}</span>}
            <span className={`font-semibold text-lg flex-grow ${colorClasses.text}`}>{text}</span>
        </div>

      {/* Edit/Delete buttons are absolutely positioned on top, as siblings to the content */}
      {isEditable && (
        <div className="absolute top-1/2 -translate-y-1/2 left-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
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

export default ListButton;