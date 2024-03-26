'use server';

import axios from 'axios';

const getUserAction = async (accessToken: string) => {
  try {
    if (!accessToken) throw new Error('No access token found');

    const response = await axios.get(`${process.env.EVOKE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    //   if (accessToken) Cookies.remove('accessToken');

    return null;
  }
};

export default getUserAction;
