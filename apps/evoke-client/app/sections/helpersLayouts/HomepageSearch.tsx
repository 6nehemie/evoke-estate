'use client';

import { usePathname } from 'next/navigation';
import SearchSettings from '../homepage/searchSettings/SearchSettings';
import Stories from '../homepage/stories/Stories';

interface HomepageSearchProps {
  children?: React.ReactNode;
}

const HomepageSearch: React.FC<HomepageSearchProps> = () => {
  //? to show the content ony on certain pages '/for_you' or '/'
  const pathname = usePathname();
  const startWithForYou = pathname.startsWith('/for_you') || pathname === '/';

  return (
    <section className={` ${!startWithForYou && 'hidden'} p-side mb-14`}>
      {/* //! DO NOT DELETE FOR FUTURE ENDEAVORS */}
      {/* <Stories /> */}

      <SearchSettings />
    </section>
  );
};

export default HomepageSearch;
