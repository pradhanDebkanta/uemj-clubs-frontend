import React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@nextui-org/react';
import Image from 'next/image';
import codestaBlack from '../../assets/images/codestaBlack.png'
import codestaWhite from '../../assets/images/codestaWhite.png'
import uemDark from '../../assets/images/uemDark.png'
import uemLight from '../../assets/images/uemLight.png'
import logo from '../../assets/styles/Navbar.module.css';

const Logo = () => {
    const router = useRouter();
    const { isDark } = useTheme();

    // console.log(router, "route")
    return (
        <>
            <div className={logo.logoBox}>
                {
                    (router.asPath === '/codesta' || router.asPath === "/features/codesta" || router.asPath === "/latest-activity/codesta") ? (
                        <Image
                            src={isDark ? codestaBlack : codestaWhite}
                            alt='codesta logo'
                            height={50}
                            width={80}
                            // layout='responsive'
                            priority={true}
                        />
                    ) : (
                        <Image
                            src={isDark ? uemLight : uemDark}
                            alt='codesta logo'
                            height={40}
                            width={80}
                            // layout='responsive'
                            priority={true}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Logo