import { PostsWrapper, UserProfileAvatar } from '@/app/components';
import ProfileBtnAction from '@/app/components/buttons/profile/ProfileBtnAction';
import PostCardProfile from '@/app/components/cards/posts/PostCardProfile';
import isFollowingAction from '@/utils/actions/isFollowingAction';
import getPostByUsername from '@/utils/functions/posts/getPostByUsername';
import { getUserByUsername, getUserData } from '@/utils/functions/users';
import {
  IAuthor,
  IPost,
  ISimpleUser,
  IUserState,
} from '@/utils/types/evokeApi/types';
import { redirect } from 'next/navigation';

const UserProfilePage = async ({
  params,
}: {
  params: { username: string };
}) => {
  const username = params.username;
  const user = await getUserData();
  const isFollowing = await isFollowingAction(username);

  //? Retrieve user profile and posts
  const userProfile: ISimpleUser = await getUserByUsername(username);
  const posts: IPost[] = await getPostByUsername(username);

  if (!userProfile) redirect('/');

  console.log('User:', userProfile);

  return (
    <section className="py-10 p-side">
      {/* //? User Infos */}
      <div className="max-w-wide w-full mx-auto flex max-lg:flex-col lg:justify-between mb-14">
        <div>
          <div className="flex lg:items-center gap-7 max-lg:flex-col max-lg:gap-6">
            <UserProfileAvatar src={userProfile.avatar} />

            <div className="">
              <h2 className="text-3xl font-medium leading-none max-lg:text-xl">
                {userProfile.fullName}
              </h2>
              <p className="text-2xl font-light max-lg:text-lg">
                @{userProfile.username}
              </p>
            </div>
          </div>

          <p className="font-light mt-4 lg:mt-9">{userProfile.title}</p>

          <p className="max-w-[397px] mt-3.5 font-light text-sm">
            {userProfile.description}
          </p>
        </div>
        <ProfileBtnAction
          user={user}
          userProfile={userProfile}
          isFollowingProfile={true}
        />
      </div>

      <PostsWrapper>
        {posts.map((post) => (
          <PostCardProfile key={post.id} post={post} />
        ))}
      </PostsWrapper>
    </section>
  );
};
export default UserProfilePage;
