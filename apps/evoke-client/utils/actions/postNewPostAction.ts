'use server';

import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

const postNewPostAction = async (formData: FormData) => {
  const accessToken = cookies().get('accessToken');

  try {
    await axios.post(`${process.env.EVOKE_URL}/posts`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error: AxiosError | any) {
    console.error('New post error: ', error.response.data);
    return { error: error.response.data.message };
  }
};

export default postNewPostAction;
