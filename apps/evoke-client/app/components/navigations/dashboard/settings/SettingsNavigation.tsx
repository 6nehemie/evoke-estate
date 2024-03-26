'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SettingsNavigation = () => {
  const pathname = usePathname();
  const isProfile = pathname === '/dashboard/settings';
  const isSecurity = pathname === '/dashboard/settings/security';

  return (
    <div className="mb-10 flex gap-8 font-light w-full border-b">
      <Link
        href={'/dashboard/settings'}
        className={`${
          isProfile && 'font-medium border-b-2 border-b-dark-gray-1 pb-6'
        }`}
      >
        Public Profile
      </Link>
      <Link
        href={'/dashboard/settings/security'}
        className={`${
          isSecurity && 'font-medium border-b-2 border-b-dark-gray-1 pb-6'
        }`}
      >
        Personal Info
      </Link>
    </div>
  );
};
export default SettingsNavigation;
