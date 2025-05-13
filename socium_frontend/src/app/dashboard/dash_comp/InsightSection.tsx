import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { ChevronDown } from "lucide-react";
import type { InsightData } from "../types/index";

interface InsightSectionProps {
  insights: InsightData;
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-slate-900 text-white p-2 rounded-md text-sm'>
        <p className='font-bold'>{label}, 2022</p>
        <p className='text-xs'>
          {payload[0].name}: {payload[0].value}%
        </p>
        <p className='text-xs'>
          {payload[1].name}: {payload[1].value}%
        </p>
      </div>
    );
  }
  return null;
};

const InsightSection: React.FC<InsightSectionProps> = ({ insights }) => {
  const [period, setPeriod] = useState("7 Days");

  const renderActiveDay = () => {
    const activeDay = insights.chartData.find((day) => day.isActive);
    if (!activeDay) return null;

    return (
      <div className='absolute -top-2 left-1/2 transform -translate-x-1/2'>
        <div className='bg-slate-900 text-white p-2 rounded-md text-xs shadow-lg'>
          <p className='font-bold'>{activeDay.day} 19, 2022</p>
          <p>{activeDay.reached}% Reached</p>
          <p>{activeDay.engaged}% Engaged</p>
        </div>
        <div className='w-3 h-3 bg-slate-900 transform rotate-45 -mt-1.5 mx-auto'></div>
      </div>
    );
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold text-slate-800'>Insight</h2>
        <div className='relative'>
          <button className='flex items-center gap-1 text-sm bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-md text-slate-700'>
            {period}
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className='flex items-center gap-6 mb-4'>
        <div className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-primary-400'></span>
          <span className='text-sm text-slate-600'>Accounts Reached</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-accent-400'></span>
          <span className='text-sm text-slate-600'>Accounts Engaged</span>
        </div>
      </div>

      <div className='relative h-80'>
        {renderActiveDay()}
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={insights.chartData}
            margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            barGap={8}
          >
            <XAxis
              dataKey='day'
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey='reached'
              fill='#a78bfa'
              radius={[4, 4, 0, 0]}
              name='Reached'
            />
            <Bar
              dataKey='engaged'
              fill='#f472b6'
              radius={[4, 4, 0, 0]}
              name='Engaged'
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InsightSection;
