'use server';

import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { evokeReq } from '../functions/evokeApiReq';

const logoutAction = async () => {
  const accessToken = cookies().get('accessToken');
  if (!accessToken) redirect('/sign-in');

  try {
    await evokeReq.post(`${process.env.EVOKE_URL}/auth/logout`);
    cookies().delete('accessToken');
  } catch (error: AxiosError | any) {
    console.error(error);
    return { error: error };
  }
};

export default logoutAction;
