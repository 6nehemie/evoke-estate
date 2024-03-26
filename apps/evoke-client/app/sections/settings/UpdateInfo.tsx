'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import FormTextArea from '@/app/components/forms/inputs/FormTextArea';
import updateUserInfoAction from '@/utils/actions/updateUserInfoAction';
import useSession from '@/utils/hooks/useSession';
import { IUserState } from '@/utils/types/evokeApi/types';
import { useRouter } from 'next/navigation';

const UpdateInfo = () => {
  const router = useRouter();
  const user = useSession() as IUserState | null;

  const clientAction = async (formData: FormData) => {
    try {
      await updateUserInfoAction(formData);
      router.refresh();
    } catch (error) {}
  };

  return (
    <form
      action={clientAction}
      className="grid xl:grid-cols-3 gap-x-20 gap-y-6"
    >
      <div className="flex flex-col gap-8 xl:col-start-1 xl:col-end-3">
        {/* //? Username & Full Name */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            label="USERNAME (*)"
            name="username"
            type="text"
            defaultValue={user?.username}
            placeholder={'Username'}
          />
          <FormInput
            label="FULL NAME (*)"
            name="fullName"
            type="text"
            defaultValue={user?.fullName}
            placeholder={'Full Name'}
          />
        </div>

        {/* //? Country & Title */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            label="CITY, COUNTRY (*)"
            name="country"
            type="text"
            defaultValue={user?.location || ''}
            placeholder={'City, Country'}
          />
          <FormInput
            label="WHO ARE YOU? (*)"
            name="title"
            type="text"
            defaultValue={user?.title}
            placeholder={'Who are you?'}
          />
        </div>

        <FormTextArea
          label="DESCRIPTION"
          name="description"
          defaultValue={user?.description}
          placeholder={'description'}
        />
      </div>

      <div className="">
        <FormSubmitBtn label="Save Changes" type="submit" islLoading={false} />
        <p className="font-light mt-6">
          Remember to save your changes before exiting this page to ensure all
          edits are securely applied.
        </p>
      </div>
    </form>
  );
};
export default UpdateInfo;
