import React, { useState, useEffect } from "react";
import throttle from "../../utils/customHooks/throttle.js";
import { Box } from "./Box.js";

export const Layout = ({ children, toggler }) => {
    const [offsetY, setOffsetY] = useState(window?.scrollY);
    const [dynamoStyle, setDynamoStyle] = useState({});

    const throttleScrollY = throttle((scrollY) => {
        setOffsetY(prev => {
            if (prev > scrollY) {
                // console.log('scroll up')
                setDynamoStyle({
                    transform: 'translateY(0px)'
                });
            } else {
                // console.log('scroll down.')
                setDynamoStyle({
                    transform: 'translateY(-100%)'
                });
            }
            return scrollY;
        })

    }, 2000);

    useEffect(() => {
        if (window !== undefined) {
            window?.addEventListener('scroll', (e) => throttleScrollY(e.currentTarget.scrollY));
        }
    }, [])

    return (
        <Box
            css={{
                maxW: "100%",
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 999,
                transition: 'all ease 0.3s',
                transform: `${toggler ? 'translateY(0px)' : dynamoStyle?.transform}`,
            }}
        >
            {children}
        </Box>
    );
};