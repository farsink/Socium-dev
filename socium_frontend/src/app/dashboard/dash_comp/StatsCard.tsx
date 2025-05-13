import React from "react";
import type { Stat } from "../types/index";

interface StatCardsProps {
  stats: Stat[];
}

const StatCards: React.FC<StatCardsProps> = ({ stats }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className='bg-white rounded-lg p-4 shadow-sm border border-slate-100'
        >
          <div className='flex items-center mb-2'>
            {stat.icon}
            <h3 className='ml-2 text-slate-500 font-medium'>{stat.label}</h3>
          </div>
          <div className='flex flex-col'>
            <span className='text-2xl md:text-3xl font-bold'>{stat.value}</span>
            <div
              className={`text-sm flex items-center mt-1 ${
                stat.changePercentage > 0
                  ? "text-green-500"
                  : stat.changePercentage < 0
                  ? "text-red-500"
                  : "text-slate-500"
              }`}
            >
              <span className='font-medium'>
                {stat.changePercentage > 0 ? "+" : ""}
                {stat.changePercentage}%
              </span>
              <span className='ml-1 text-slate-400'>than last week</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
