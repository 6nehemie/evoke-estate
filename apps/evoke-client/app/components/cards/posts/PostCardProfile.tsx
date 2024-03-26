import Image from 'next/image';
import Link from 'next/link';
import AspectRatioPost from '../../images/AspectRatioPost';
import { IPost } from '@/utils/types/evokeApi/types';

interface Post {
  post: IPost;
}

const PostCardProfile: React.FC<Post> = ({ post }) => {
  return (
    <div>
      <Link
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
    </div>
  );
};
export default PostCardProfile;
