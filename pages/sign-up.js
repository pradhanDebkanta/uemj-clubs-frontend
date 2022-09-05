import React from 'react';
import Head from 'next/head';
import SignUpComp from '../components/Authentication/NormalUser/SignUp';

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Member Sign Up</title>
                <meta name="description" content="UEMJ create Coding Club, Nature Club" />
                <link rel="icon" href="/images/uemLight.png" />
            </Head>
            <SignUpComp />
        </div>
    )
}

export default SignUp