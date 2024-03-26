'use client';

import { IPost } from '@/utils/types/evokeApi/types';
import { useRouter } from 'next/navigation';
import { PostAction } from '../..';
import GalleryAvatar1 from '../../avatars/GalleryAvatar1';
import PostFollowUser from '../../buttons/infos/PostFollowUser';
import { useAppSelector } from '@/lib/hooks';

interface PostModalProps {
  post: IPost;
  children: React.ReactNode;
}

const PostModal: React.FC<PostModalProps> = ({ post, children }) => {
  const router = useRouter();
  const closeModal = () => router.back();
  const user = useAppSelector((state) => state.user);
  const ownPost = user.username === post.author.username;
  const tempLikedPost = post.likedBy.filter(
    (u) => u.username === user.username
  );
  const hasLikedPost = tempLikedPost.length > 0;

  const userInitials = post.author.fullName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <>
      <div
        onClick={closeModal}
        className="fixed top-0 left-0 right-0 bottom-0 bg-dark-gray-1 bg-opacity-40 z-[110]"
      ></div>

      <section className="fixed top-8 max-lg:top-0 left-0 right-0 bottom-0 bg-primary-100 z-[120] rounded-tl-3xl max-lg:rounded-none overflow-hidden overflow-y-scroll">
        <div className="sticky top-0 z-[120] flex items-center justify-between p-side py-3.5 mb-3 h-20 bg-white">
          {/* //? User Info */}
          <div className="flex items-center gap-4 max-lg:gap-2">
            <div className="max-sm:hidden">
              <GalleryAvatar1
                src={post.author.avatar}
                initials={userInitials}
              />
            </div>

            <div className="text-xmd max-lg:text-sm">
              <h3 className="font-semibold leading-none">
                {post.title.toUpperCase()}
              </h3>

              <PostFollowUser
                username={post.author.username}
                fullName={post.author.fullName}
                isFollowing={true}
              />
            </div>
          </div>

          <PostAction
            post={post}
            ownPost={ownPost}
            hasLikedPost={hasLikedPost}
          />
        </div>

        <div className="">{children}</div>
      </section>
    </>
  );
};
export default PostModal;
