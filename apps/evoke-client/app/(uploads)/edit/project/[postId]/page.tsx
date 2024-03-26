import EditPost from '@/app/components/posts/EditPost';
import getPostById from '@/utils/functions/posts/getPostById';
import { getUserData } from '@/utils/functions/users';
import { IPost } from '@/utils/types/evokeApi/types';
import { redirect } from 'next/navigation';

const page = async ({ params }: { params: { postId: string } }) => {
  const response = await getPostById(params.postId);
  const user = await getUserData();
  const post: IPost = response;

  if (response.error || !user) redirect('/');
  if (user.username !== post.author.username) redirect('/');

  return (
    <div>
      <EditPost post={post} />
    </div>
  );
};
export default page;
