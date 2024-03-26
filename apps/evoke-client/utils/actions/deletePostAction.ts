'use server';

import { AxiosError } from 'axios';
import { evokeReq } from '../functions/evokeApiReq';

const deletePostAction = async (postId: number) => {
  try {
    await evokeReq.delete(`/posts/${postId}`);
  } catch (error: AxiosError | any) {
    console.error('New post error: ', error.response.data);
    return { error: error.response.data.message };
  }
};

export default deletePostAction;
