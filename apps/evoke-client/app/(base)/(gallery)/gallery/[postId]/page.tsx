import {
  PostAction,
  PostFollowUser,
  UserProfileAvatar,
} from '@/app/components';
import PostContainer from '@/app/sections/posts/PostContainer';
import getPostById from '@/utils/functions/posts/getPostById';
import { getUserData } from '@/utils/functions/users';
import { IPost } from '@/utils/types/evokeApi/types';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function PostPage({ params }: { params: { postId: string } }) {
  const response = await getPostById(params.postId);
  const user = await getUserData();
  const post: IPost = response;

  if (response.error) redirect('/');

  const ownPost = user.username === post.author.username;

  const userInitials = post.author.fullName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section>
      <div className="flex flex-col items-center py-14">
        <Link href={`/${post.author.username}`}>
          <UserProfileAvatar src={post.author.avatar} initials={userInitials} />
        </Link>

        <div className="flex flex-col items-center text-center mt-6">
          <div className="mb-4">
            <PostFollowUser
              username={post.author.username}
              fullName={post.author.fullName}
              isFollowing={true}
            />
          </div>

          <h3 className="text-2xl font-semibold leading-none ">
            {post.title.toUpperCase()}
          </h3>

          <PostAction
            className="mt-6"
            btnClassName="bg-white"
            ownPost={ownPost}
            post={post}
          />
        </div>
      </div>
      <PostContainer post={post} />
    </section>
  );
}
export default PostPage;
