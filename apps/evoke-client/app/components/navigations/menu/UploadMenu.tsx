import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ClockIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface UploadMenuProps {}

const UploadMenu: React.FC<UploadMenuProps> = () => {
  const navigationStyle =
    'flex items-center gap-4 px-4 py-3 hover:bg-neutral-50 transition-colors duration-200';

  return (
    <HoverCard closeDelay={100} openDelay={5}>
      <HoverCardTrigger asChild>
        <button
          className={`flex items-center justify-center h-10 w-10 rounded-lg bg-white hover:bg-neutral-100 transition-colors duration-200 cursor-pointer max-lg:hidden`}
        >
          <PlusIcon className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </HoverCardTrigger>

      <HoverCardContent className="w-72 p-0 mr-20">
        <div className="flex flex-col font-light text-sm py-2">
          <Link href={'/create/project/new'} className={`${navigationStyle} `}>
            <PlusIcon className="h-5 w-5" strokeWidth={1.5} />
            <span>Share Design</span>
          </Link>

          {/* <Link href={'/create/story'} className={`${navigationStyle}`}>
            <ClockIcon className="h-5 w-5" strokeWidth={1.5} />
            <span>Share Story</span>
          </Link> */}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UploadMenu;
