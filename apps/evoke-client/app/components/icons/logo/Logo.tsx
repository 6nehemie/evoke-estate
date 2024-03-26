import Link from 'next/link';

type LogoProps = {
  long?: boolean;
  sm?: boolean;
};

const Logo: React.FC<LogoProps> = ({ long, sm }) => {
  return (
    <Link href={'/'} className={'italic text-2xl font-light'}>
      eǝ.
    </Link>
  );
};

export default Logo;
