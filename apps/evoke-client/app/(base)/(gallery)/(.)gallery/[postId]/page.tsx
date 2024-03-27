import ClosePost from '@/app/components/buttons/posts/ClosePost';
import PostModal from '@/app/components/modals/posts/PostModal';
import PostContainer from '@/app/sections/posts/PostContainer';
import getPostById from '@/utils/functions/posts/getPostById';
import { getUserData } from '@/utils/functions/users';
import { IPost } from '@/utils/types/evokeApi/types';
import { redirect } from 'next/navigation';

async function DynamicPage({ params }: { params: { postId: string } }) {
  const user = await getUserData();
  const response = await getPostById(params.postId);
  if (response.error) redirect('/');

  const post: IPost = response;

  return (
    <PostModal post={post} user={user}>
      <PostContainer post={post} />
      <ClosePost />
    </PostModal>
  );
}
export default DynamicPage;
