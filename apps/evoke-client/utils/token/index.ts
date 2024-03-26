'use server';

import { cookies } from 'next/headers';

export const getAccessToken = () => {
  const accessToken = cookies().get('accessToken');

  if (!accessToken?.value) {
    return '';
  }

  return accessToken.value;
};
