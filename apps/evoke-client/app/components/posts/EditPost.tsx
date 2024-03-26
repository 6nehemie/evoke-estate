'use client';

import { FormInput } from '@/app/components';
import FormTextArea from '@/app/components/forms/inputs/FormTextArea';
import UploadProjectNavbar from '@/app/components/navigations/navbar/UploadProjectNavbar';
import deletePostAction from '@/utils/actions/deletePostAction';
import updatePostInfoAction from '@/utils/actions/updatePostInfoAction';
import { IPost } from '@/utils/types/evokeApi/types';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

interface IEditPost {
  post: IPost;
}

const EditPost: React.FC<IEditPost> = ({ post }) => {
  const router = useRouter();

  const clientAction = async (formData: FormData) => {
    try {
      const response = (await updatePostInfoAction(formData, post.id)) as any;

      if (response && response.error) {
        throw new Error(response.error);
      }
      router.push('..');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deletePostAction(post.id);
      if (response && response.error) {
        throw new Error(response.error);
      }
      router.refresh();
      router.push('/');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form action={clientAction} className="min-h-screen">
      <UploadProjectNavbar />

      <div className={`new-post-grid p-side py-32`}>
        <div className="new-post-image">
          <NextImage
            src={post.image}
            alt="Preview"
            width={10000}
            height={10000}
            className="rounded-3xl w-full"
          />
        </div>

        <div className="new-post-content flex flex-col gap-7 max-[1024px]:pt-14 min-[1024px]:pt-28">
          <FormInput
            label="Title (*)"
            name="title"
            type="text"
            defaultValue={post.title}
            placeholder={'Title'}
          />

          <FormTextArea
            label="DESCRIPTION"
            name="description"
            defaultValue={post.description}
            placeholder={'description'}
          />

          <div
            onClick={handleDelete}
            className="self-end text-red-500 cursor-pointer"
          >
            <p>Delete Post</p>
          </div>
        </div>
      </div>
    </form>
  );
};
export default EditPost;
