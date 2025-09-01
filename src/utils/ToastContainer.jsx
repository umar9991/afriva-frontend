import React, { useState, useEffect, createContext, useContext } from 'react';

// Toast context for managing global toast state
const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Toast component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 
                  type === 'error' ? 'bg-red-500' : 
                  type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500';

  return (
    <div className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between">
        <span className="font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

// Toast provider component
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showSuccessToast = (message) => addToast(message, 'success');
  const showErrorToast = (message) => addToast(message, 'error');
  const showWarningToast = (message) => addToast(message, 'warning');
  const showInfoToast = (message) => addToast(message, 'info');

  return (
    <ToastContext.Provider value={{ showSuccessToast, showErrorToast, showWarningToast, showInfoToast }}>
      {children}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
};

// Toast container (for backward compatibility)
export default function ToastContainer() {
  return null; // This is now just a placeholder
}

// Export individual functions for backward compatibility
export const showSuccessToast = (message) => {
  // This will be overridden by the context
  console.log('Success:', message);
};

export const showErrorToast = (message) => {
  // This will be overridden by the context
  console.log('Error:', message);
};

export const showNormalToast = (message) => {
  // This will be overridden by the context
  console.log('Info:', message);
};
