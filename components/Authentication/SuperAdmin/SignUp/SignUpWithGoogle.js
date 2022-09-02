import React, { } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import sign from '../../../../assets/styles/superAdmin/sign.module.css'

const SignUpWithGoogle = ({ onSignIn, buttonText }) => {
    const handleSuccess = (response) => {
        onSignIn(response.tokenId)
    }
    const handleError = (response) => {
        onSignIn('');
        console.log(response, 'err');
    }

    return (
        <div className={sign.gAuthBox}>
            <GoogleLogin
                clientId={process?.env?.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}
                buttonText={buttonText}
                onSuccess={handleSuccess}
                onFailure={handleError}
                cookiePolicy={'single_host_origin'}
            // isSignedIn={true}
            />

            {/* <GoogleLogout
                clientId={process?.env?.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={() => {
                    console.log('logout successs')
                }}
            >
            </GoogleLogout> */}
        </div>
    )
}

export default SignUpWithGoogle