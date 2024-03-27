import DashboardNavigation from '@/app/components/navigations/dashboard/DashboardNavigation';
import { getUserData } from '@/utils/functions/users';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserData();
  if (!user.username) return redirect('/');

  return (
    <section className="p-side py-10 min-h-screen">
      <div className="max-w-wide w-full mx-auto grid grid-cols-4 max-[1101px]:grid-cols-3 max-lg:grid-cols-1 gap-x-5 gap-y-14">
        <DashboardNavigation className="lg:max-w-[278px]" />

        <div className="lg:col-start-2 lg:col-end-[-1] dashboard-grid gap-x-5 gap-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
