import React from "react";
import type { AudienceData } from "../types/index";

interface AudienceSectionProps {
  audience: AudienceData;
}

const AudienceSection: React.FC<AudienceSectionProps> = ({ audience }) => {
  return (
    <div className='bg-white rounded-lg p-4 shadow-sm border border-slate-100'>
      <h2 className='text-lg font-semibold text-slate-800 mb-4'>Audience</h2>

      <div className='flex items-center gap-6 mb-4'>
        <div className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-primary-400'></span>
          <span className='text-sm text-slate-600'>Female</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-accent-400'></span>
          <span className='text-sm text-slate-600'>Male</span>
        </div>
      </div>

      <div className='space-y-4'>
        {audience.demographics.map((demographic, index) => (
          <div key={index} className='flex flex-col'>
            <div className='flex items-center justify-between mb-1'>
              <span className='text-sm text-slate-600'>
                {demographic.ageRange}
              </span>
              <span className='text-sm font-medium'>
                {demographic.percentage}%
              </span>
            </div>
            <div className='h-2 bg-slate-100 rounded-full overflow-hidden'>
              <div className='flex h-full'>
                <div
                  className='bg-primary-400 h-full'
                  style={{ width: `${demographic.femalePercentage}%` }}
                ></div>
                <div
                  className='bg-accent-400 h-full'
                  style={{ width: `${demographic.malePercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceSection;
