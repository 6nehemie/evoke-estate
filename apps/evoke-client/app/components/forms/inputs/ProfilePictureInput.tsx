'use client';

import { user } from '@/app/constant';
import UserProfileAvatar from '../../avatars/UserProfileAvatar';
import { convertToInitials } from '@/utils/functions/textTransformations';
import { useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const ProfilePictureInput = () => {
  const initials = convertToInitials(user.fullName);

  //   const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>(user.avatar);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //   setProfilePicture(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center gap-6">
      <UserProfileAvatar src={preview} initials={initials} />

      <div className="">
        <label
          htmlFor="avatar"
          className=" cursor-pointer flex items-center gap-4 h-10 border border-dark-gray-1 rounded-xl px-4 "
        >
          <span className="font-light text-xmd">Update Picture</span>
          <ArrowUpTrayIcon className="w-4 h-4" />
        </label>
        <input
          id="avatar"
          name="avatar"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};
export default ProfilePictureInput;
