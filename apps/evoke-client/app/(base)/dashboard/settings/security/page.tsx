import DeleteAccount from '@/app/sections/settings/DeleteAccount';
import UpdateEmail from '@/app/sections/settings/UpdateEmail';
import UpdatePassword from '@/app/sections/settings/UpdatePassword';

const page = async () => {
  return (
    <div className="">
      <UpdateEmail />

      <hr className="my-20" />

      <UpdatePassword />

      <hr className="my-20" />

      <DeleteAccount />
    </div>
  );
};
export default page;
