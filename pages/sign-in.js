import React from 'react';
import { useRouter } from 'next/router';
import SignINComp from '../components/Authentication/NormalUser/SignIn';
import ForgetPassword from '../components/Authentication/NormalUser/ForgetPassword';

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