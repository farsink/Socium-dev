import React from "react";
import { Plus } from "lucide-react";
import type { User } from "../types/index";
import Image from "next/image";

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mb-6'>
      <div className='relative'>
        <Image
          src={user.profileImage}
          alt={user.username}
          className='w-16 h-16 md:w-20 md:h-20 rounded-full object-cover'
          width={20}
          height={20}
        />
        <button
          title='Add'
          className='absolute bottom-0 right-0 bg-secondary-500 text-white rounded-full p-1'
        >
          <Plus size={16} />
        </button>
      </div>
      <div>
        <div className='flex items-center gap-2'>
          <h2 className='text-xl md:text-2xl font-bold text-slate-800'>
            {user.handle}
          </h2>
          {user.verified && (
            <span className='bg-primary-100 text-primary-600 text-xs rounded-full px-2 py-1'>
              ★
            </span>
          )}
        </div>
        <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-500 text-sm'>
          <span>{user.name}</span>
          <span className='hidden sm:block'>•</span>
          <span>{user.tagline}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
