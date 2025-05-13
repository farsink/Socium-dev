import React, { useState } from "react";
import clsx from "clsx";
import type { NotificationData } from "../types/index";

interface NotificationSectionProps {
  notifications: NotificationData;
}

const NotificationSection: React.FC<NotificationSectionProps> = ({
  notifications,
}) => {
  const [activeTab, setActiveTab] = useState("following");

  const tabs = [
    { id: "inbox", label: "Inbox", count: notifications.inbox.length },
    {
      id: "following",
      label: "Following",
      count: notifications.following.length,
    },
    { id: "archived", label: "Archived", count: 0 },
  ];

  const getActiveNotifications = () => {
    switch (activeTab) {
      case "inbox":
        return notifications.inbox;
      case "following":
        return notifications.following;
      case "archived":
        return [];
      default:
        return notifications.following;
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold text-slate-800 mb-4'>
        Notification
      </h2>

      <div className='flex border-b border-slate-200 mb-4'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(
              "pb-2 px-4 text-sm font-medium relative",
              activeTab === tab.id
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-slate-500 hover:text-slate-800"
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.count > 0 && (
              <span className='ml-1 px-1.5 py-0.5 text-xs bg-primary-100 text-primary-600 rounded-full'>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className='space-y-4 max-h-[340px] overflow-y-auto'>
        {getActiveNotifications().map((notification, index) => (
          <div key={index} className='flex items-start gap-3'>
            <img
              src={notification.user.avatar}
              alt={notification.user.username}
              className='w-10 h-10 rounded-full object-cover flex-shrink-0'
            />
            <div className='flex-1 min-w-0'>
              <div className='flex justify-between items-start'>
                <div>
                  <span className='font-medium text-slate-800'>
                    {notification.user.username}{" "}
                  </span>
                  <span className='text-slate-600 text-sm'>
                    {notification.action}{" "}
                  </span>
                  {notification.actionObject && (
                    <span className='text-slate-500 text-sm'>
                      {notification.actionObject}
                    </span>
                  )}
                  {notification.actionImage && (
                    <img
                      src={notification.actionImage}
                      alt='Post'
                      className='mt-1 h-10 w-10 object-cover rounded'
                    />
                  )}
                </div>
                <span className='text-xs text-slate-400 whitespace-nowrap flex-shrink-0'>
                  {notification.time}
                </span>
              </div>
              {notification.postExcerpt && (
                <p className='text-sm text-slate-500 mt-1 truncate'>
                  {notification.postExcerpt}
                </p>
              )}
              {notification.showFollow && (
                <button className='mt-2 text-primary-600 text-sm font-medium hover:text-primary-700'>
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSection;
