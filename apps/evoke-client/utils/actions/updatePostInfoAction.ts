'use server';

import { AxiosError } from 'axios';
import { evokeReq } from '../functions/evokeApiReq';

const updatePostInfoAction = async (formData: FormData, postId: number) => {
  const data = Object.fromEntries(formData.entries());
  const { title, description } = data;

  try {
    await evokeReq.put('/posts', {
      id: postId,
      title,
      description,
    });
  } catch (error: AxiosError | any) {
    console.error('New post error: ', error.response.data);
    return { error: error.response.data.message };
  }
};

export default updatePostInfoAction;
