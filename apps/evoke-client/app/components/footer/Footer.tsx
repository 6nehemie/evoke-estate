import Link from 'next/link';
import Logo from '../icons/logo/Logo';

const Footer = () => {
  const footerLinkStyle = 'flex flex-col gap-4 w-max';

  return (
    <footer className="max-w-wide w-full mx-auto mt-10">
      <div className="mb-12">
        <div className="mb-6">
          <Logo />
        </div>

        <div className="grid grid-cols-6 max-lg:grid-cols-2 gap-5 text-sm font-medium">
          <div className={footerLinkStyle}>
            <Link href={'/search?tag=kitchen'} className="block">
              Kitchen
            </Link>
            <Link href={'/search?tag=living-room'} className="block">
              Living Room
            </Link>
          </div>

          <div className={footerLinkStyle}>
            <Link href={'/search?tag=master-bedroom'} className="block">
              Master Bedroom
            </Link>
            <Link href={'/search?tag=home-office'} className="block">
              Home Office
            </Link>
          </div>

          <div className={footerLinkStyle}>
            <Link href={'/academy'} className="block">
              Academy
            </Link>
            <Link href={'/pro'} className="block">
              Evoke Pro
            </Link>
          </div>

          <div className={footerLinkStyle}>
            <Link href={'/faq'} className="block">
              FAQ
            </Link>
            <Link href={'/about'} className="block">
              About Us
            </Link>
            <Link href={'/contact'} className="block">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="border-dashed border-t border-t-neutral-300"></div>

      <div className="flex max-lg:flex-col gap-4 lg:justify-between py-12 pb-32 text-sm font-light">
        <div className="flex flex-wrap items-center gap-6">
          <Link href={'/policy'}>Cookies Policy</Link>
          <Link href={'/policy'}>Legal Terms</Link>
          <Link href={'/policy'}>Privacy Policy</Link>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <p className="font-medium">Connect:</p>
          <a
            href="https://www.linkedin.com/in/nehemie-mombanga/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/NehemieMbg" target="_blank">
            Github
          </a>
          <a href="https://www.6nehemie.com/" target="_blank">
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
