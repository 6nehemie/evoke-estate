import { Navbar } from '../components';
import Footer from '../components/footer/Footer';
import HomepageSearch from '../sections/helpersLayouts/HomepageSearch';

export const revalidate = 0;

export default async function BaseLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid-layout">
      <div className="sticky top-0 bg-primary-100 z-[100] p-side">
        <Navbar />
      </div>

      <main className="">
        <HomepageSearch />

        {children}
      </main>

      <div className="p-side mt-10">
        <Footer />
      </div>
    </section>
  );
}
