'use client';

import { usePathname } from 'next/navigation';

interface DashboardNavigationProps {
  className?: string;
}

const DashboardNavigation: React.FC<DashboardNavigationProps> = ({
  className,
}) => {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';
  const isSettings =
    pathname === '/dashboard/settings' ||
    pathname === '/dashboard/settings/security';

  return (
    <div className={`${className} font-light`}>
      <div>
        {isDashboard && <p className="mb-2">Welcome</p>}
        {isDashboard && (
          <h1 className="text-4xl font-semibold mb-10">My Account</h1>
        )}

        {isSettings && (
          <h1 className="text-4xl font-semibold mb-10">My Profile</h1>
        )}
      </div>

      {isDashboard && (
        <p className="text-xmd">
          Customize your profile, manage subscriptions, view order history,
          access courses, and update billing info for a tailored experience.
        </p>
      )}

      {isSettings && (
        <p className="text-xmd">
          Refine your profile, refresh directory info, and upload a profile
          picture to showcase your identity.
        </p>
      )}
    </div>
  );
};
export default DashboardNavigation;
