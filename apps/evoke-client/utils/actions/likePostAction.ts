'use server';

import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { evokeReq } from '../functions/evokeApiReq';

const likePostAction = async (postId: number) => {
  const accessToken = cookies().get('accessToken');
  if (!accessToken) redirect('/sign-in');

  try {
    const response = await evokeReq.post(
      `${process.env.EVOKE_URL}/posts/${postId}/likes`
    );

    return response.data.isLiked;
  } catch (error: AxiosError | any) {
    console.error('Like post error: ', error.response.data);
    return { error: error.response.data.message };
  }
};

export default likePostAction;
