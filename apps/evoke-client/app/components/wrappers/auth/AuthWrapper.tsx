import { auth } from '@/app/constant';
import Image from 'next/image';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <section className="auth-grid h-full">
      <div className="relative max-[1000px]:hidden flex items-center justify-center h-screen w-full overflow-hidden">
        <Image
          src={auth.wallpaper}
          alt="Authentication Wallpaper"
          width={1920}
          height={2400}
          className="static top-0 left-0 w-full h-full object-cover object-center"
        />
      </div>

      <div className="auth-px h-screen">
        <div className="flex flex-col justify-between h-full max-w-[500px] w-full mx-auto">
          <h2 className="auth-py text-xl font-light">
            {auth.register.welcome}
          </h2>

          {children}
        </div>
      </div>
    </section>
  );
};
export default AuthWrapper;
