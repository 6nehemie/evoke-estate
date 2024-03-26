'use server';

import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { evokeReq } from '../functions/evokeApiReq';

const followUserAction = async (username: string) => {
  const accessToken = cookies().get('accessToken');
  if (!accessToken) redirect('/sign-in');

  try {
    const response = await evokeReq.post(
      `${process.env.EVOKE_URL}/follows/follow/${username}`
    );

    return response.data.isLiked;
  } catch (error: AxiosError | any) {
    console.error('Following response:', error.response.data);
    return { error: error.response.data.message };
  }
};

export default followUserAction;
