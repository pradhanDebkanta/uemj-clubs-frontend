import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const GAuthInitializer = ({ children }) => {
    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
                scope: "profile email"
            })
        }
        gapi.load("client:auth2", start);

    }, [])
    return (
        <>
            {children}
        </>
    )
}

export default GAuthInitializer