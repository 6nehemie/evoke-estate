import Link from 'next/link';

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  description: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  href,
  description,
}) => {
  return (
    <Link href={href} className="text-sm p-7 bg-white rounded-xl">
      <div>{icon}</div>
      <h3 className="mt-6 mb-4 font-semibold">{title}</h3>
      <p className="font-light">{description}</p>
    </Link>
  );
};
export default DashboardCard;
