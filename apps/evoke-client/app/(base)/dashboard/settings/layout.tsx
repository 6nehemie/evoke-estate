import { SettingsNavigation } from '@/app/components';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <SettingsNavigation />
      {children}
    </section>
  );
}
