
import React from 'react';
import { DownloadIcon, DocumentTextIcon, TableCellsIcon, HomeIcon, UploadIcon, TrashIcon, CogIcon, ArrowUturnLeftIcon } from './icons';
import type { MainCategory, SubCategory } from '../types';

interface HeaderProps {
  onSaveJson: () => void;
  onImportJson: () => void;
  onExportTs: () => void;
  onImportTs: () => void;
  onExportCsv: () => void;
  onNewChat: () => void;
  onSavePdf: () => void;
  isSavingPdf: boolean;
  isChatActive: boolean;
  isEditing: boolean;
  onToggleEdit: () => void;
  onResetCategories: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ 
    onSaveJson,
    onImportJson,
    onExportTs,
    onImportTs,
    onExportCsv,
    onNewChat,
    onSavePdf,
    isSavingPdf,
    isChatActive,
    isEditing,
    onToggleEdit,
    onResetCategories,
    className,
}) => {
  const buttonBaseClass = "flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors";
  const enabledClass = "text-gray-700 bg-gray-100 hover:bg-gray-200";

  return (
    <header className={`flex justify-between items-center p-4 sm:p-6 bg-white w-full border-b border-gray-200 ${className}`}>
      <div className="text-right">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700">
          העוזר הדיגיטלי שלך
        </h1>
        <p className="mt-1 sm:mt-2 text-md sm:text-lg text-gray-600">
          מדריך פשוט וידידותי למחשב וטלפון נייד
        </p>
        <p className="mt-1 text-sm text-gray-500">
          מומלץ בחום לגיל השלישי ובכלל
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-end gap-2 sm:gap-3">
        <button
          onClick={onToggleEdit}
          title={isEditing ? "סיים עריכה" : "עבור למצב עריכה"}
          className={`${buttonBaseClass} ${isEditing ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'}`}
        >
          {isEditing ? 'סיים עריכה' : 'עריכה'}
        </button>

        {isEditing && (
            <>
                <button
                    onClick={onResetCategories}
                    title="איפוס קטגוריות לברירת מחדל"
                    className={`${buttonBaseClass} bg-red-50 text-red-600 hover:bg-red-100 border border-red-200`}
                >
                    <TrashIcon className="w-5 h-5" />
                    <span>איפוס</span>
                </button>
                <button
                    onClick={onImportJson}
                    title="טען מבנה קטגוריות מקובץ JSON"
                    className={`${buttonBaseClass} ${enabledClass}`}
                    >
                    <UploadIcon className="w-5 h-5" />
                    <span>יבא JSON</span>
                </button>
                <button
                    onClick={onSaveJson}
                    title="גבה את מבנה הקטגוריות לקובץ JSON"
                    className={`${buttonBaseClass} ${enabledClass}`}
                    >
                    <DownloadIcon className="w-5 h-5" />
                    <span>יצא JSON</span>
                </button>
                <button
                    onClick={onImportTs}
                    title="טען מבנה קטגוריות מקובץ TS"
                    className={`${buttonBaseClass} ${enabledClass}`}
                    >
                    <UploadIcon className="w-5 h-5" />
                    <span>יבא TS</span>
                </button>
                <button
                    onClick={onExportTs}
                    title="גבה את מבנה הקטגוריות לקובץ familyData.ts"
                    className={`${buttonBaseClass} ${enabledClass}`}
                    >
                    <DocumentTextIcon className="w-5 h-5" />
                    <span>יצא TS</span>
                </button>
                <button
                    onClick={onExportCsv}
                    title="גבה את מבנה הקטגוריות לקובץ CSV"
                    className={`${buttonBaseClass} ${enabledClass}`}
                    >
                    <TableCellsIcon className="w-5 h-5" />
                    <span>יצא CSV</span>
                </button>
            </>
        )}

        {isChatActive && (
          <>
            <button
              onClick={onNewChat}
              title="התחל שיחה חדשה"
              className={`${buttonBaseClass} bg-teal-50 text-teal-600 hover:bg-teal-100 border border-teal-200`}
            >
              <HomeIcon className="w-5 h-5" />
              <span>שיחה חדשה</span>
            </button>
            <button
              onClick={onSavePdf}
              disabled={isSavingPdf}
              title="שמור שיחה כ-PDF"
              className={`${buttonBaseClass} bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed`}
            >
              {isSavingPdf ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>יוצר PDF...</span>
                </>
              ) : (
                <>
                  <DownloadIcon className="w-5 h-5" />
                  <span>שמור PDF</span>
                </>
              )}
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
