import { SearchSettingsDropdown } from '@/app/components';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const SearchSettings = () => {
  return (
    <section className="flex justify-between max-w-wide w-full mx-auto pt-4">
      <SearchSettingsDropdown />

      {/* <button className="hover:bg-neutral-100 transition-colors duration-200 px-4 h-12">
        <span className="inline-block pr-4">Filters</span>
        <AdjustmentsHorizontalIcon className="inline-block w-5 h-5" />
      </button> */}
    </section>
  );
};
export default SearchSettings;
