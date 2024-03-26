import { PostsWrapper, UserProfileAvatar } from '@/app/components';
import ProfileBtnAction from '@/app/components/buttons/profile/ProfileBtnAction';
import PostCardProfile from '@/app/components/cards/posts/PostCardProfile';
import getPostByUsername from '@/utils/functions/posts/getPostByUsername';
import { getUserByUsername } from '@/utils/functions/users';
import { IPost, ISimpleUser } from '@/utils/types/evokeApi/types';
import { redirect } from 'next/navigation';

const UserProfilePage = async ({
  params,
}: {
  params: { username: string };
}) => {
  let user: ISimpleUser;
  const posts: IPost[] = [];
  const username = params.username;

  try {
    const userResponse = await getUserByUsername(username);
    const postsResponse = await getPostByUsername(username);

    if (userResponse.error) {
      throw new Error(userResponse.error);
    }

    user = userResponse;
    posts.push(...postsResponse);
  } catch (error) {
    console.error(error);
    // act accordingly redirect to homepage or show error message
    redirect('/');
  }

  return (
    <section className="py-10 p-side">
      {/* //? User Infos */}
      <div className="max-w-wide w-full mx-auto flex max-lg:flex-col lg:justify-between mb-14">
        <div>
          <div className="flex lg:items-center gap-7 max-lg:flex-col max-lg:gap-6">
            <UserProfileAvatar src={user.avatar} />

            <div className="">
              <h2 className="text-3xl font-medium leading-none max-lg:text-xl">
                {user.fullName}
              </h2>
              <p className="text-2xl font-light max-lg:text-lg">
                @{user.username}
              </p>
            </div>
          </div>

          <p className="font-light mt-4 lg:mt-9">{user.title}</p>

          <p className="max-w-[397px] mt-3.5 font-light text-sm">
            {user.description}
          </p>
        </div>
        <ProfileBtnAction user={user} />
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
