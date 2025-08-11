import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

export default function ToastContainer() {
  return <Toaster position="top-right" reverseOrder={false} />;
}

export const showSuccessToast = (message) => {
  toast.success(message);
};

export const showErrorToast = (message) => {
  toast.error(message);
};

export const showNormalToast = (message) => {
  toast(message);
};
