import React from 'react';
import { useRouter } from 'next/router';
import SignInComp from '../../../components/Authentication/Admin/SignIn';
import ForgetPassword from '../../../components/Authentication/Admin/ForgetPassword';

const SignIn = () => {
    const router = useRouter();
    const query = router.query;

    return (
        <div>
            {
                query?.['forget-password'] ? (
                    <ForgetPassword />
                ) : (
                    <SignInComp />
                )
            }
        </div>
    )
}

export default SignIn