import IsAuthenticated from '@/app/components/protectors/IsAuthenticated';
import { getUserData } from '@/utils/functions/users';
import { redirect } from 'next/navigation';

export default async function UploadProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const user = await getUserData();
  if (!user) return redirect('/');

  return <main>{children}</main>;
}
