'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import updateUserEmailAction from '@/utils/actions/UpdateUserEmailAction';
import useSession from '@/utils/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IProps {
  currentEmail: string;
}

const UpdateEmail = () => {
  const router = useRouter();
  const session = useSession();

  const [updateError, setUpdateError] = useState<string | null>(null);

  const clientAction = async (formData: FormData) => {
    try {
      const response = await updateUserEmailAction(formData);
      if (response && response.error) {
        throw new Error(response.error);
      }

      router.push('.');

      // ? log out user
    } catch (error: any) {
      // manage error
      console.error(error);
      setUpdateError(error.message as string);
    }
  };

  return (
    <form
      action={clientAction}
      className="grid xl:grid-cols-3 gap-x-20 gap-y-6"
    >
      <h2 className="text-lg font-medium mb-4">Change email</h2>

      <div className="flex flex-col gap-8 xl:col-start-1 xl:col-end-3">
        <div>
          <p className="block mb-2 text-xs font-light text-text-light-gray uppercase">
            Current Email
          </p>
          <p>{session?.email}</p>
        </div>

        {/* //? Username & Full Name */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            label="New E-mail (*)"
            name="newEmail"
            type="email"
            placeholder={'New E-mail'}
          />
          <FormInput
            label="Confirm New E-mail (*)"
            name="confirmEmail"
            type="email"
            placeholder={'Confirm E-mail'}
          />
        </div>
      </div>

      <div className="">
        {updateError && (
          <p className="font-light text-xmd mb-5 text-red-400">{updateError}</p>
        )}
        <FormSubmitBtn label="Update E-mail" type="submit" islLoading={false} />
        <p className="font-light mt-6">
          Remember to save your changes before exiting this page to ensure all
          edits are securely applied.
        </p>
      </div>
    </form>
  );
};
export default UpdateEmail;
