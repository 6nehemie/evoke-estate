import { IPost } from '@/utils/types/evokeApi/types';
import { EyeIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import PostAvatar from '../../avatars/PostAvatar';
import AspectRatioPost from '../../images/AspectRatioPost';

interface Post {
  post: IPost;
}

const PostCard: React.FC<Post> = ({ post }) => {
  const isPro = true;
  const userInitials = post.author.fullName
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <div>
      <Link
        key={post.id}
        href={`/gallery/${post.id}`}
        className="contentContainer relative grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden"
      >
        <div className='className="row-start-1 row-end-2 col-start-1 col-end-2'>
          <AspectRatioPost>
            <Image
              src={post.image}
              alt="post image"
              width={773}
              height={434}
              className="rounded-lg object-center h-full w-full object-cover"
            />
          </AspectRatioPost>
        </div>

        {/* //? Hidden effects are on the global.css file */}
        <div className="contentTitle flex p-5 items-end row-start-1 row-end-2 col-start-1 col-end-2 z-[1] bg-gradient-to-t from-[rgba(30,30,30,0.7)] to-transparent">
          <h3 className="text-white font-light uppercase text-xmd">
            {post.title}
          </h3>
        </div>
      </Link>

      <div className="flex justify-between items-center mt-4">
        {/* //? Profile info */}
        <div className="flex gap-2 items-center">
          <Link href={`/${post.author.username}`}>
            <PostAvatar src={post.author.avatar} initials={userInitials} />
          </Link>

          <Link
            href={`/${post.author.username}`}
            className="inline-block text-xmd hover:underline cursor-pointer"
          >
            {post.author.fullName}
          </Link>
          {isPro && (
            <p className="inline-block self-start text-[8px] uppercase font-light mt-1">
              Pro
            </p>
          )}
        </div>

        {/* //? Post Stats */}
        <div className="flex gap-4 items-center">
          <div>
            <HandThumbUpIcon className="inline-block h-4 text-dark-gray-1" />
            <span className="inline-block text-xs font-medium ml-1">
              {/* //! To be updated */}
              {post.likedBy.length}
            </span>
          </div>

          <div className="">
            <EyeIcon className="inline-block h-4 text-dark-gray-1" />
            <span className="inline-block text-xs font-medium ml-1">
              {post.views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
