'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import AuthWrapper from '@/app/components/wrappers/auth/AuthWrapper';
import { auth } from '@/app/constant';
import { useAppDispatch } from '@/lib/hooks';
import signIn from '@/utils/auth/signIn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { setUser } from '@/lib/features/user/userSlice';

interface ErrorResponse {
  error: string;
}

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signInError, setSignInError] = useState<string>('');

  async function clientAction(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      const response = await signIn({ username, password });

      if (response && response.error) {
        throw new Error(response.error);
      }

      dispatch(setUser(response));
      router.refresh();
    } catch (error: ErrorResponse | any) {
      const message = error.message as string;
      setSignInError(message);
    }
  }

  return (
    <AuthWrapper>
      <div>
        <h1 className="font-exo2 text-2xl mb-10">{auth.signIn.title}</h1>
        {signInError && (
          <p className="font-light text-xmd mb-5 text-red-400">{signInError}</p>
        )}
        <form action={clientAction} className="flex flex-col gap-6">
          <FormInput
            name="username"
            type="text"
            label="Email (*)"
            placeholder="Email or Username"
            // required
          />

          <FormInput
            name="password"
            type="password"
            label="Password (*)"
            placeholder="Password"
            // required
          />

          <div className="flex flex-col gap-4 w-full">
            <FormSubmitBtn label="Sign In" islLoading={false} />
            <Link
              href="/forgot-password"
              className="text-sm font-normal underline text-end"
            >
              Forgot your password ?
            </Link>
          </div>
        </form>
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
export default SignInPage;
