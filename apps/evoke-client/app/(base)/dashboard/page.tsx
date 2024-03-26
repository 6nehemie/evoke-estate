import { DashboardCard } from '@/app/components';
import {
  AcademicCapIcon,
  CheckCircleIcon,
  CreditCardIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const page = () => {
  const profileDescription = `Refine your profile, refresh directory info, and upload a profile picture to showcase your identity.`;
  const proSubscriptionDescription =
    "Unlock the power of Pro subscription: Post courses & vote for the week's best design. Elevate your influence in the design community.";
  const estateAcademyDescription =
    'Access Evoke Estate Academy: Watch all your purchased courses, masterclasses, and workshops for a comprehensive learning journey.';
  const paymentAndBillingDescription = `Manage your payment methods, view transaction history, and update billing information for seamless transactions.`;

  return (
    <>
      <DashboardCard
        icon={<UserIcon className="w-8 h-8 text-primary-500" />}
        title="Profile"
        href={'/dashboard/settings'}
        description={profileDescription}
      />
      <DashboardCard
        icon={<CheckCircleIcon className="w-8 h-8 text-primary-500" />}
        title="Pro subscription"
        href={'/'}
        description={proSubscriptionDescription}
      />
      <DashboardCard
        icon={<AcademicCapIcon className="w-8 h-8 text-primary-500" />}
        title="Evoke Estate Academy"
        href={'/'}
        description={estateAcademyDescription}
      />
      <DashboardCard
        icon={<CreditCardIcon className="w-8 h-8 text-primary-500" />}
        title="Payment & Billing"
        href={'/'}
        description={paymentAndBillingDescription}
      />
    </>
  );
};
export default page;
