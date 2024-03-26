import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NavSearch = () => {
  return (
    <div className="flex items-center gap-4 bg-white pl-5 h-12 max-lg:h-9 max-w-[448px] w-full rounded-lg overflow-hidden">
      <div>
        <MagnifyingGlassIcon
          className="h-4 w-4 text-neutral-400"
          strokeWidth={2.5}
        />
      </div>
      <input
        type="text"
        placeholder="Search Evoke Estate"
        className="text-sm font-light w-full h-full outline-none placeholder:font-extralight placeholder:text-sm"
      />
    </div>
  );
};
export default NavSearch;
