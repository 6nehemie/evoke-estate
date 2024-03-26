import Link from 'next/link';

const UploadProjectNavbar = () => {
  return (
    <div className="bg-primary-100 fixed top-0 w-full h-20 flex items-center justify-end gap-4 font-light text-xmd py-6 p-side">
      <Link
        href={'/'}
        className="flex items-center justify-center border border-dark-gray-1 rounded-xl h-10 w-20"
      >
        <span className="">Cancel</span>
      </Link>

      <button className="border bg-dark-gray-1 text-white rounded-xl h-10 px-4 w-20">
        Post
      </button>
    </div>
  );
};
export default UploadProjectNavbar;
