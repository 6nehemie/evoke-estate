import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

const SearchSettingsDropdown = () => {
  const router = useRouter();

  const handleFeatured = () => {
    router.push('/for_you');
  };

  const handleFollowing = () => {
    router.push('/for_you/following');
  };

  const handleChanges = (value: string) => {
    if (value === 'For You') {
      handleFeatured();
    } else if (value === 'Following') {
      handleFollowing();
    }
  };

  return (
    <Select onValueChange={handleChanges}>
      <SelectTrigger className="w-[194px] h-12 rounded-lg outline-none border-none">
        <SelectValue placeholder="Featured" />
      </SelectTrigger>

      <SelectContent className="">
        <SelectGroup>
          {/* <SelectLabel>Featured</SelectLabel> */}
          <SelectItem value="For You" className="py-3">
            <button>For You</button>
          </SelectItem>
          {/* <SelectItem value="Following" className="py-3">
            Following
          </SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchSettingsDropdown;
