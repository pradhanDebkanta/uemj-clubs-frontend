import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SignINComp from '../components/Authentication/NormalUser/SignIn';
import ForgetPassword from '../components/Authentication/ForgetPassword';
import { Spacer } from '@nextui-org/react';

const SignIn = () => {
    const router = useRouter();
    const query = router.query;
    return (
        <div>
            <Head>
                <title>Member Sign In</title>
                <meta name="description" content="UEMJ create Coding Club, Nature Club" />
                <link rel="icon" href="/images/uemLight.png" />
            </Head>
            <Spacer y={3} />
            {
                query?.['forget-password'] ? (
                    <ForgetPassword role={'club_member'} />
                ) : (
                    <SignINComp />
                )
            }

        </div>
    )
}

export default SignIn