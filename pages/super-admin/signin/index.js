import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SignINComp from '../../../components/Authentication/SuperAdmin/SignIn';
import ForgetPassword from '../../../components/Authentication/SuperAdmin/ForgetPassword';

const SignIn = () => {
  const router = useRouter();
  const query = router.query;
  return (
    <div>
      <Head>
        <title>Administrator Sign In</title>
        <meta name="description" content="UEMJ create Coding Club, Nature Club" />
        <link rel="icon" href="/images/uemLight.png" />
      </Head>

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