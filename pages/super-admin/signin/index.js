import React from 'react';
import { useRouter } from 'next/router';
import SignINComp from '../../../components/Authentication/SuperAdmin/SignIn';
import ForgetPassword from '../../../components/Authentication/SuperAdmin/ForgetPassword';

const SignIn = () => {
  const router = useRouter();
  const query = router.query;
  return (
    <div>
      {
        query?.['forget-password'] ? (
          <ForgetPassword />
        ) : (
          <SignINComp />
        )
      }
    </div>
  )
}

export default SignIn