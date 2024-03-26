'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const ClosePost = () => {
  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <button
      onClick={closeModal}
      className="fixed bottom-10 right-10 max-lg:right-6 max-lg:bottom-6 w-14 h-14 bg-dark-gray-1 rounded-xl"
    >
      <XMarkIcon className="w-7 h-7 mx-auto text-primary-100" />
    </button>
  );
};
export default ClosePost;
