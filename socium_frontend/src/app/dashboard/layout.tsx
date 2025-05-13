"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./dash_comp/Sidebar";
import PlatformSection from "./dash_comp/Platform";
import { mockData } from "./data/Mockdata";
import { WebhookIcon } from "lucide-react";
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { DashboardUIContext } from "./DashboardContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();
  const router = useRouter();
  // console.log(user);
  useEffect(() => {
    if (!user) {
      router.push("/Auth");
    }
  }, []);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [platformBarCollapsed, setPlatformBarCollapsed] = useState(true);

  return (
    <DashboardUIContext.Provider
      value={{
        sidebarCollapsed,
        setSidebarCollapsed,
        platformBarCollapsed,
        setPlatformBarCollapsed,
      }}
    >
      <div className='flex min-h-screen bg-slate-50'>
        {/* Main Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        {/* Platform Sidebar */}
        <button
          type='button'
          title='Show Platforms'
          className='fixed bottom-5 right-4 z-40 p-3 rounded-full bg-slate-900 text-white text-shadow-amber-50 md:hidden sm:hidden'
          onClick={() => setPlatformBarCollapsed(!platformBarCollapsed)}
          style={{ display: platformBarCollapsed ? "block" : "none" }}
        >
          <WebhookIcon size={20} />
        </button>

        {/* Platform Sidebar */}
        <div
          className={`fixed top-0 ${
            sidebarCollapsed ? "left-0 sm:left-15" : "left-[200px]"
          } h-full bg-white border-r border-slate-200 transition-all duration-300 z-30
        ${
          platformBarCollapsed
            ? "w-0 opacity-0 pointer-events-none"
            : "w-[250px] opacity-100"
        } md:opacity-100 md:w-[250px] md:pointer-events-auto`}
        >
          <div className='p-4'>
            <PlatformSection
              platforms={mockData.platforms}
              onCloseMobile={() => setPlatformBarCollapsed(true)}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className='flex-1'>{children}</div>
      </div>
    </DashboardUIContext.Provider>
  );
}
