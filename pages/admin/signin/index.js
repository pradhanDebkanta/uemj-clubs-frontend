import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SignInComp from '../../../components/Authentication/Admin/SignIn';
import ForgetPassword from '../../../components/Authentication/ForgetPassword';


const SignIn = () => {
    const router = useRouter();
    const query = router.query;

    return (
        <div>
            <Head>
                <title>Co-ordinators Sign In</title>
                <meta name="description" content="UEMJ create Coding Club, Nature Club" />
                <link rel="icon" href="/images/uemLight.png" />
            </Head>
            {
                query?.['forget-password'] ? (
                    <ForgetPassword
                        role={'admin'}
                    />
                ) : (
                    <SignInComp />
                )
            }
        </div>
    )
}

export default SignIn