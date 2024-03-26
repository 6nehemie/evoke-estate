import { cookies } from 'next/headers';

export const removeAuthCookie = () => {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');
};

export default removeAuthCookie;
