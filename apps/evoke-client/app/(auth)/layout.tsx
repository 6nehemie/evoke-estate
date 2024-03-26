import { getUserData } from '@/utils/functions/users';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ? check if user is already logged in
  const user = await getUserData();
  if (user || user?.username) redirect('/');

  return <section>{children}</section>;
}
