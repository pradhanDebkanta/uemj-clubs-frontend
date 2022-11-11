import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
import React from 'react';
import SignUpComp from '../../../components/Authentication/SuperAdmin/SignUp';

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Administrator Sign Up</title>
                <meta name="description" content="UEMJ create Coding Club, Nature Club" />
                <link rel="icon" href="/images/uemLight.png" />
            </Head>
            <Spacer y={3} />
            <SignUpComp />
        </div>
    )
}

export default SignUp