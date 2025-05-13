import React from "react";
import {
  Home,
  BarChart2,
  MessageSquare,
  Radio,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  Triangle,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const router = useRouter();
  const pathname = usePathname();
  const navItems = [
    {
      icon: <Home size={20} />,
      label: "Home",
      href: "/dashboard/home",
    },
    {
      icon: <BarChart2 size={20} />,
      label: "Analytics",
      href: "/dashboard",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Messages",
      href: "/dashboard/messages",
    },
    {
      icon: <Radio size={20} />,
      label: "Broadcast",
      href: "/dashboard/broadcast",
    },
    { icon: <User size={20} />, label: "Profile", href: "/dashboard/profile" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type='button'
        title='Menu'
        className={`${
          !collapsed
            ? "fixed left-43 top-1/3 transform -translate-y-1/2 z-50 p-2 rounded-full bg-slate-900 text-white md:hidden transition-all"
            : "fixed -left-4 top-1/3 transform -translate-y-1/2 z-50 p-2 rounded-full bg-slate-900 text-white md:hidden transition-all"
        }`}
        onClick={() => setCollapsed(!collapsed)}
      >
        {!collapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      <div
        className={`fixed left-0 top-0 h-full bg-slate-900 text-white transition-all duration-300 z-40 
          ${
            collapsed
              ? "-translate-x-full md:translate-x-0 md:w-16"
              : "w-[200px]"
          }`}
      >
        {/* Logo */}
        <div className='p-4 flex items-center justify-center h-16 border-b border-slate-800'>
          {collapsed ? (
            <Triangle size={20} fill='white' />
          ) : (
            <div className='flex items-center'>
              <Triangle size={20} fill='white' className='mr-3' />
              <span className='text-lg font-semibold'>Socium.dev</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className='py-4'>
          {navItems.map((item, index) => {
            // Determine if this item is active
            const isActive =
              pathname === item.href ||
              (item.href === "/dashboard" && pathname === "/dashboard"); // adjust as needed

            return (
              <div
                key={index}
                className={`px-4 py-3 flex items-center ${
                  isActive
                    ? "bg-primary-700 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                } transition-colors cursor-pointer ${
                  collapsed ? "justify-center" : ""
                }`}
                onClick={() => router.push(item.href)}
              >
                <div className={isActive ? "text-white" : ""}>{item.icon}</div>
                {!collapsed && (
                  <span className='ml-3 text-sm'>{item.label}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Settings */}
        <div className='absolute bottom-0 w-full border-t border-slate-800'>
          <div className='px-4 py-3 flex items-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer'>
            <Settings size={20} />
            {!collapsed && <span className='ml-3 text-sm'>Settings</span>}
          </div>
        </div>

        {/* Collapse Button - Only visible on desktop */}
        <button
          className='absolute top-1/2 -right-3 bg-slate-900 rounded-full p-1 text-white hidden md:block'
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
