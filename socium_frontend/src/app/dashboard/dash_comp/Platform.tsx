import React from "react";
import type { Platform } from "../types/index";
import { XIcon } from "lucide-react";

interface PlatformSectionProps {
  platforms: Platform[];
  onCloseMobile: (() => void) | null;
}

const PlatformSection: React.FC<PlatformSectionProps> = ({
  platforms,
  onCloseMobile,
}) => {
  return (
    <div>
      {/* close button for mobiles */}
      {onCloseMobile && (
        <button
          type='button'
          title='Close'
          className='md:hidden absolute top-4 right-4 z-50 p-1 rounded-full bg-slate-100 hover:bg-slate-200'
          onClick={onCloseMobile}
        >
          <XIcon size={20} />
        </button>
      )}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold text-slate-800'>Platform</h2>
        <button
          title='Add'
          className='text-primary-600 hover:bg-primary-50 p-1 rounded-lg'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-plus'
          >
            <path d='M5 12h14' />
            <path d='M12 5v14' />
          </svg>
        </button>
      </div>

      <div className='space-y-2'>
        {platforms.map((platform, index) => (
          <div
            key={index}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
              platform.active
                ? "bg-primary-100 border-l-4 border-primary-600"
                : "hover:bg-slate-50"
            }`}
          >
            <div
              className='w-8 h-8 rounded flex items-center justify-center mr-3'
              style={{ backgroundColor: platform.bgColor }}
            >
              {platform.icon}
            </div>
            <div className='flex-1'>
              <div className='text-sm font-medium text-slate-800'>
                {platform.username}
              </div>
              <div className='text-xs text-slate-500'>{platform.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformSection;
