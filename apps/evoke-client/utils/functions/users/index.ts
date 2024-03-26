'use server';

import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

//? Retrieve user data with access token
export const getUserData = async () => {
  const accessToken = cookies().get('accessToken');

  try {
    if (!accessToken || !accessToken.value)
      throw new Error('No access token found');

    const response = await axios.get(`${process.env.EVOKE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });

    return response.data;
  } catch (error: any) {
    if (accessToken && accessToken.value === 'accessToken')
      cookies().delete('accessToken');

    return null;
  }
};

//? Retrieve user data by username
export const getUserByUsername = async (username: string) => {
  try {
    const response = await axios.get(
      `${process.env.EVOKE_URL}/users/${username}`
    );
    const data = response.data;

    return data;
  } catch (error: AxiosError | any) {
    const errorMsg = error.response.data.message;
    console.error(error);
    return { error: errorMsg };
  }
};
