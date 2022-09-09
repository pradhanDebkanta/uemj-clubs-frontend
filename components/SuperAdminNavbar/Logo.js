import React from 'react';
import { useTheme } from '@nextui-org/react';
import Image from 'next/image';
import uemDark from '../../assets/images/uemDark.png'
import uemLight from '../../assets/images/uemLight.png'
import logo from '../../assets/styles/Navbar.module.css';

const Logo = () => {
    const { isDark } = useTheme();

    return (
        <>
            <div className={logo.logoBox}>
                <Image
                    src={isDark ? uemLight : uemDark}
                    alt='uem logo'
                    height={40}
                    width={80}
                    // layout='responsive'
                    priority={true}
                />
            </div>
        </>
    )
}

export default Logo