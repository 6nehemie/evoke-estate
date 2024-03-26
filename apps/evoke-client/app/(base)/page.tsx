import getAllPost from '@/utils/functions/posts/getAllPost';
import { IPost } from '@/utils/types/evokeApi/types';
import { PostCard, PostsWrapper } from '../components';

export default async function Home() {
  const response = await getAllPost();
  const posts: IPost[] = Array.isArray(response) ? response : [];

  return (
    <main className="p-side">
      <PostsWrapper>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsWrapper>
    </main>
  );
}
