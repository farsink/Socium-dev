"use client";
import React from "react";
import ProfileHeader from "./dash_comp/Profileheader";
import StatCards from "./dash_comp/StatsCard";
import { mockData } from "./data/Mockdata";
import InsightSection from "./dash_comp/InsightSection";
import NotificationSection from "./dash_comp/Notification";
import AudienceSection from "./dash_comp/Audiance";
import { useDashboardUI } from "./DashboardContext";

const Analytics: React.FC = () => {
  const { sidebarCollapsed, platformBarCollapsed } = useDashboardUI();
  return (
    <>
      <div
        className={`flex-1 transition-all duration-300 
        ${sidebarCollapsed ? "md:ml-[290px]" : "md:ml-[440px]"} 
        ${platformBarCollapsed ? "ml-0" : "ml-0"} p-4 md:p-6`}
      >
        <div className='max-w-[1200px] mx-auto'>
          <div className='bg-white rounded-lg shadow-sm p-2 md:p-6'>
            {/* User Profile and Stats */}
            <div className='mb-6'>
              <ProfileHeader user={mockData.user} />
              <StatCards stats={mockData.stats} />
            </div>

            {/* Charts and Data */}
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
              <div className='bg-white rounded-lg border border-slate-100'>
                <InsightSection insights={mockData.insights} />
              </div>
              <div className='bg-white rounded-lg border border-slate-100'>
                <NotificationSection notifications={mockData.notifications} />
              </div>
            </div>

            {/* Audience Section */}
            <div className='mt-6'>
              <AudienceSection audience={mockData.audience} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
