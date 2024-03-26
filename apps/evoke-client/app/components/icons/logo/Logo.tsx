type LogoProps = {
  long?: boolean;
  sm?: boolean;
};

const Logo: React.FC<LogoProps> = ({ long, sm }) => {
  return (
    <a href={'/'} className={'italic text-2xl font-light'}>
      eǝ.
    </a>
  );
};

export default Logo;
