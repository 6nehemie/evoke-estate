'use client';

import { BellIcon } from '@heroicons/react/24/outline';
import Logo from '../../icons/logo/Logo';

import Link from 'next/link';
import IconContainer from '../../icons/container/IconContainer';
import NavSearch from '../../search/NavSearch';
import AvatarMenu from '../menu/AvatarMenu';
// import { user } from '@/app/constant';Ø
import { useAppSelector } from '@/lib/hooks';
import UploadMenu from '../menu/UploadMenu';

const Navbar = () => {
  const user = useAppSelector((state) => state.user);

  // display icons based on screen size
  const iconResponsive = 'max-lg:hidden';
  const isLoggedIn = user?.username ? true : false;

  return (
    <nav className="max-w-wide w-full mx-auto flex items-center h-20 max-md:h-16">
      <div className="flex items-center justify-between gap-5 w-full">
        <Logo />

        <div className="flex w-full justify-end items-center gap-4">
          <NavSearch />

          {!false || isLoggedIn ? (
            <Link
              href={'/pro'}
              className={`flex items-center text-[15px] h-10 px-5 rounded-xl bg-dark-gray-1 text-white font-thin ${iconResponsive}`}
            >
              <span>Be Pro</span>
            </Link>
          ) : (
            <Link
              href={'/pro'}
              className={`flex items-center text-[15px] h-10 px-5 rounded-xl border border-dark-gray-1 text-dark-gray-1 font-light ${iconResponsive}`}
            >
              <span>Pro</span>
            </Link>
          )}

          {/* {isLoggedIn && (
            <IconContainer className={iconResponsive}>
              <Squares2X2Icon className="h-5 w-5" strokeWidth={1.3} />
            </IconContainer>
          )} */}
          {/* 
          {isLoggedIn && (
            <IconContainer className={iconResponsive}>
              <BellIcon className="h-5 w-5" strokeWidth={1} />
            </IconContainer>
          )} */}

          {isLoggedIn && <UploadMenu />}

          {/* //? Sing Up */}
          {!isLoggedIn && (
            <Link
              href={'/sign-up'}
              className="text-[15px] whitespace-nowrap max-lg:hidden"
            >
              Sing Up
            </Link>
          )}

          {/* //? Sing In */}
          {!isLoggedIn && (
            <Link
              href={'/sign-in'}
              className="flex items-center text-[15px] h-10 max-lg:h-9 px-5 rounded-xl border border-dark-gray-1 text-dark-gray-1 font-light whitespace-nowrap"
            >
              Sing In
            </Link>
          )}

          {/* //? Avatar & Menu Pop when hovered */}
          {isLoggedIn && <AvatarMenu user={user} />}

          {/* {isLoggedIn && <NavbarAvatar />} */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
