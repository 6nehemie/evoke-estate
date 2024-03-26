'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

interface IsAuthenticatedProps {
  children: React.ReactNode;
}

const IsAuthenticated: React.FC<IsAuthenticatedProps> = ({ children }) => {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();

  if (!user.username) router.push('/');

  return <>{children}</>;
};
export default IsAuthenticated;
