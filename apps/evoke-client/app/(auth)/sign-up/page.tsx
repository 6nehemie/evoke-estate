'use client';

import { FormCheckbox, FormInput, FormSubmitBtn } from '@/app/components';
import AuthWrapper from '@/app/components/wrappers/auth/AuthWrapper';
import { auth } from '@/app/constant';
import { setUser } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import register from '@/utils/auth/register';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ErrorResponse {
  error: string;
}

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signUpError, setSignUpError] = useState<string>('');

  async function clientAction(formData: FormData) {
    try {
      const response = await register(formData);

      if (response && response.error) {
        throw new Error(response.error);
      }

      dispatch(setUser(response));
      router.push('/');
    } catch (error: ErrorResponse | any) {
      console.error(error);
      const message = error.message as string;
      setSignUpError(message);
    }
  }

  return (
    <AuthWrapper>
      <div>
        <h1 className="font-exo2 text-2xl mb-10">{auth.register.title}</h1>
        {signUpError && (
          <p className="font-light text-xmd mb-5 text-red-400">{signUpError}</p>
        )}
        <form action={clientAction} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="firstName"
              type="text"
              label="First Name (*)"
              placeholder="First Name"
              //   required
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name (*)"
              placeholder="Last Name"
              //   required
            />
          </div>

          <FormInput
            name="username"
            type="text"
            label="Username (*)"
            placeholder="Username"
            // required
          />
          <FormInput
            name="email"
            type="email"
            label="Email (*)"
            placeholder="Email"
            // required
          />
          <FormInput
            name="password"
            type="password"
            label="Password (*)"
            placeholder="Password"
            // required
          />
          <FormInput
            name="passwordConfirmation"
            type="password"
            label="Repeat Password (*)"
            placeholder="Repeat Password"
            // required
          />

          <p className="font-light text-[15px]">
            Evoke Estate may keep me informed with personalized emails about
            products and services. See our{' '}
            <Link href={'/privacy'} className="font-medium">
              Privacy Policy
            </Link>{' '}
            for more details.
          </p>

          <div className="py-5">
            <FormCheckbox
              label="I have read and accept the Terms and Conditions."
              name="termsAndConditions"
            />
          </div>

          <FormSubmitBtn label="Create Account" islLoading={false} />
        </form>
      </div>

      <p className="font-light text-sm auth-py">
        Are you a member?{' '}
        <Link href="/sign-in" className="font-medium underline">
          Sign In now
        </Link>
      </p>
    </AuthWrapper>
  );
};
export default SignUpPage;
