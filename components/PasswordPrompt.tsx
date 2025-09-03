import React, { useState, useEffect } from 'react';

interface PasswordPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (password: string) => void;
  title: string;
  message: string;
}

const PasswordPrompt: React.FC<PasswordPromptProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      setPassword(''); // Reset on open
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(password);
  };

  const aSiteSays = "האתר אומר";
  const enterTextFor = "הכנס את הטקסט עבור";

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-700 rounded-2xl p-6 shadow-xl max-w-sm w-full text-white"
        onClick={(e) => e.stopPropagation()}
        style={{ direction: 'rtl' }}
      >
        <h2 className="text-lg font-semibold mb-1">{aSiteSays}</h2>
        <p className="text-gray-300 mb-4">{message}</p>
        <form onSubmit={handleConfirm}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-600 border-2 border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-white"
            autoFocus
          />
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-sm font-semibold text-white bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
            >
              ביטול
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-semibold text-blue-900 bg-blue-300 rounded-full hover:bg-blue-200 transition-colors"
            >
              אישור
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordPrompt;
