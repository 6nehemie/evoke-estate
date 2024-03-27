import UpdateAvatar from '@/app/sections/settings/UpdateAvatar';
import UpdateInfo from '@/app/sections/settings/UpdateInfo';
import { getUserData } from '@/utils/functions/users';
import { redirect } from 'next/navigation';

const page = async () => {
  const user = await getUserData();
  if (!user) return redirect('/');

  return (
    <div>
      <UpdateAvatar user={user} />
      <UpdateInfo />
    </div>
  );
};
export default page;
