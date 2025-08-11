import React from 'react';
import { showSuccessToast} from '../utils/ToastContainer';

export default function ViewAllButton() {
  return (
    <div 
    onClick={() => showSuccessToast('Button clicked successfully!')} className="w-[218px] h-[52px] px-[54px] py-4 rounded-[62px] outline outline-1 outline-offset-[-1px] outline-black/10 inline-flex justify-center items-center gap-3 overflow-hidden cursor-pointer">
      <div className="text-black text-base font-medium font-['Inter']">View All</div>
    </div>
  );
}
