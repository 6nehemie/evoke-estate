'use client';

import { UserProfileAvatar } from '@/app/components';
import { convertToInitials } from '@/utils/functions/textTransformations';

import { setAvatar } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import removeAvatarAction from '@/utils/actions/removeAvatarAction';
import updateAvatarAction from '@/utils/actions/updateAvatarAction';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { IUserState } from '@/utils/types/evokeApi/types';

interface IProps {
  user: IUserState;
}

const UpdateAvatar: React.FC<IProps> = ({ user }) => {
  const router = useRouter();
  const initials = convertToInitials(user.fullName);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // create formData to be sent to the server
    const formData = new FormData();

    // append the file to the formData
    formData.append('avatar', file);

    try {
      await updateAvatarAction(formData);
      router.refresh();
    } catch (error) {}
  };

  const handleAvatarRemoval = async () => {
    try {
      await removeAvatarAction();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex items-center gap-6 mb-10">
      <UserProfileAvatar src={user.avatar} initials={initials} />

      <div className="">
        <label
          htmlFor="avatar"
          className=" cursor-pointer flex items-center gap-4 h-10 border border-dark-gray-1 rounded-xl px-4 "
        >
          <span className="font-light text-xmd max-sm:text-xs">
            Update Picture
          </span>
          <ArrowUpTrayIcon className="w-4 h-4 max-sm:hidden" />
        </label>
        <input
          id="avatar"
          name="avatar"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      {user.avatar && (
        <div>
          <p
            onClick={handleAvatarRemoval}
            className="text-red-400 cursor-pointer text-xmd"
          >
            Remove
          </p>
        </div>
      )}
    </form>
  );
};
export default UpdateAvatar;
