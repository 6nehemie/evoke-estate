'use client';

import Cookies from 'js-cookie';
import { IUserState } from '../types/evokeApi/types';
import { useEffect, useState } from 'react';
import getUserAction from '../actions/getUserAction';
import { useRouter } from 'next/navigation';

const useSession = () => {
  const accessToken = Cookies.get('accessToken');
  const router = useRouter();
  const [userData, setUserData] = useState<IUserState | null>(null);

  if (!accessToken) router.push('/');

  useEffect(() => {
    if (!accessToken) return;

    (async () => {
      const response = await getUserAction(accessToken!);
      setUserData(response);
    })();
  }, [accessToken]);

  return userData;
};

export default useSession;
