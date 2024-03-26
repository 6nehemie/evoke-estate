import { PlusIcon } from '@heroicons/react/24/outline';

const AddStory = () => {
  return (
    <div className="flex flex-col items-center gap-2 w-max">
      <button className={`h-14 w-14  bg-dark-gray-1 rounded-full`}>
        <PlusIcon className="h-8 w-8 max-lg:h-5 max-lg:w-5 text-white mx-auto" />
      </button>
      <p className="text-xs font-light">Add Yours</p>
    </div>
  );
};
export default AddStory;
