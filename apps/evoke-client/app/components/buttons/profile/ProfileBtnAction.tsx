'use client';

import { useAppSelector } from '@/lib/hooks';
import followUserAction from '@/utils/actions/followUserAction';
import unfollowUserAction from '@/utils/actions/unfollowUserAction';
import { ISimpleUser, IUserState } from '@/utils/types/evokeApi/types';
import { useRouter } from 'next/navigation';

interface IProps {
  userProfile: ISimpleUser;
  user?: IUserState;
  isFollowingProfile: boolean;
}

const ProfileBtnAction: React.FC<IProps> = ({
  user,
  userProfile,
  isFollowingProfile,
}) => {
  const router = useRouter();
  const followerSpanStyle = 'font-medium';
  const ownProfile = user?.username === userProfile.username || false;

  // check if authenticated user is following the user

  // ? handle following and unfollowing
  const handleFollowing = async () => {
    if (!user?.username) return router.push('/sign-in');

    try {
      await followUserAction(userProfile.username);
      router.refresh();
    } catch (error) {}
  };

  const handleUnfollowing = async () => {
    if (!user?.username) return router.push('/sign-in');

    try {
      await unfollowUserAction(userProfile.username);
      router.refresh();
    } catch (error) {}
  };

  return (
    <div className="max-lg:mt-6">
      <div className="font-light text-md lg:text-right">
        <p className="inline-block mr-4">
          Followers{' '}
          <span className={followerSpanStyle}>
            {userProfile.followers.length}
          </span>
        </p>
        <p className="inline-block">
          Following{' '}
          <span className={followerSpanStyle}>
            {userProfile.following.length}
          </span>
        </p>
      </div>

      <div
        className={`${
          ownProfile && 'hidden'
        } flex gap-4 items-center lg:justify-end mt-5 font-light`}
      >
        {/* <Link
		href={'/'}
		className="border border-dark-gray-1 px-4 h-12 rounded-xl font-extralight flex items-center justify-center hover:bg-neutral-100 transition-colors duration-200"
	  >
		Message
	  </Link> */}

        {/* {isFollowingProfile ? (
          <button
            onClick={handleUnfollowing}
            className="bg-dark-gray-1 px-4 h-12 text-white rounded-xl font-extralight"
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={handleFollowing}
            className="bg-dark-gray-1 px-4 h-12 text-white rounded-xl font-extralight"
          >
            Follow
          </button>
        )} */}
      </div>
    </div>
  );
};
export default ProfileBtnAction;
