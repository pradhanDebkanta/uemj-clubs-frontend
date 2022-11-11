import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
import React from 'react';
import SignUp from '../../../components/Authentication/Admin/SignUp';

const signUp = () => {
    return (
        <div>
            <Head>
                <title>Co-ordinators Sign Up</title>
                <meta name="description" content="UEMJ create Coding Club, Nature Club" />
                <link rel="icon" href="/images/uemLight.png" />
            </Head>
            <Spacer y={3} />
            <SignUp />
        </div>
    )
}

export default signUp