'use client';

import { auth } from '@/app/constant';
import Link from 'next/link';
import AuthWrapper from '@/app/components/wrappers/auth/AuthWrapper';
import { FormInput, FormSubmitBtn } from '@/app/components';
import { useState } from 'react';

const ForgotPasswordPage = () => {
  const [hasBeenSent, setHasBeenSent] = useState(false);

  async function clientAction(formData: FormData) {
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      // pass server action here
      setHasBeenSent(true);
    } catch (error) {}
  }

  return (
    <AuthWrapper>
      <div>
        {!hasBeenSent ? (
          <h1 className="font-exo2 text-2xl mb-10">{auth.forgot.title}</h1>
        ) : (
          <h1 className="font-exo2 text-2xl mb-10">Congratulations!</h1>
        )}

        {!hasBeenSent ? (
          <form action={clientAction} className="flex flex-col gap-6">
            <p className="font-light text-[15px]">
              Enter your username or email address and we will send you a link
              to reset your password.
            </p>

            <FormInput
              name="username"
              type="text"
              label="Email or Username (*)"
              placeholder="Email or Username"
              // required
            />

            <div className="flex flex-col gap-4 w-full">
              <FormSubmitBtn label="Continue" islLoading={false} />
              <Link
                href="/sign-in"
                className="text-sm font-normal underline text-center"
              >
                Return to Sign In
              </Link>
            </div>
          </form>
        ) : (
          <div className="flex flex-col gap-6 font-thin text-[15px]">
            <p className="font-normal">
              We have sent you a verification e-mail.
            </p>

            <p>
              Please verify your account via the link in the e-mail and complete
              registration.
            </p>

            <p>
              If you don&apos;t receive an email from us, please check your
              spam.
            </p>

            <p className="font-normal">Evoke Estate team</p>
          </div>
        )}
      </div>

      <p className="font-light text-sm auth-py">
        Not a member yet?{' '}
        <Link href="/sign-up" className="font-medium underline">
          Register now
        </Link>
      </p>
    </AuthWrapper>
  );
};
export default ForgotPasswordPage;
