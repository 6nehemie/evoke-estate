'use client';

import { useAppSelector } from '@/lib/hooks';
import likePostAction from '@/utils/actions/likePostAction';
import { IPost } from '@/utils/types/evokeApi/types';
import {
  HandThumbUpIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

interface PostActionProps {
  className?: string;
  ownPost?: boolean;
  btnClassName?: string;
  post: IPost;
  hasLikedPost?: boolean;
}

const PostAction: React.FC<PostActionProps> = ({
  className,
  btnClassName,
  ownPost,
  post,
}) => {
  const router = useRouter();
  const params = useParams();
  const user = useAppSelector((state) => state.user);
  const tempLikedPost = post.likedBy.filter(
    (u) => u.username === user.username
  );
  const hasLikedPost = tempLikedPost.length > 0;

  const buttonActionStyle = `h-11 w-11 rounded-full sm:hover:bg-neutral-200 transition-colors duration-200`;

  const [isPostLiked, setIsPostLiked] = useState(hasLikedPost);

  const redirectToEdit = () => {
    router.push(`/edit/project/${params.postId}`);
  };

  const handleLike = async () => {
    if (!user.username) router.push('/sign-in');
    try {
      const isLiked = await likePostAction(post.id);
      if (isLiked.error) throw new Error('Error liking post');

      setIsPostLiked(isLiked);
    } catch (error) {
      console.error('Error liking post: ', error);
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* //? Likes Btn */}
      <button
        onClick={handleLike}
        className={`${buttonActionStyle} ${
          isPostLiked
            ? 'bg-dark-gray-1 text-white'
            : `bg-primary-100 text-black ${btnClassName}`
        }`}
      >
        <HandThumbUpIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
      </button>

      {/* //? Save Btn */}
      <button
        className={`${buttonActionStyle} ${
          false
            ? 'bg-dark-gray-1 text-white'
            : `bg-primary-100 text-black ${btnClassName}`
        }`}
      >
        <PlusIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
      </button>

      {/* //? Edit Btn */}
      {ownPost && (
        <button
          onClick={redirectToEdit}
          className={`${buttonActionStyle} ${
            false
              ? 'bg-dark-gray-1 text-white'
              : `bg-primary-100 text-black ${btnClassName}`
          }`}
        >
          <PencilIcon className="w-6 h-6 mx-auto" strokeWidth={1.2} />
        </button>
      )}
    </div>
  );
};
export default PostAction;
