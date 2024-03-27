'use server';

import axios, { AxiosError } from 'axios';
import { cookies, headers } from 'next/headers';
import { evokeReq } from '../functions/evokeApiReq';

const isFollowingAction = async (username: string) => {
  const accessToken = cookies().get('accessToken');

  try {
    const response = await axios.get(
      `${process.env.EVOKE_URL}/following/${username}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken?.value}`,
        },
      }
    );

    console.log('Following response:', response.data);

    // return response.data.isLiked;
  } catch (error: AxiosError | any) {
    console.error('isFollowing Error: ', error);
    return null;
  }
};

export default isFollowingAction;
