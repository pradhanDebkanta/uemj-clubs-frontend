import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import codesta from '../../assets/images/codesta.png'
import uemLogo from '../../assets/images/uemLogo.jpeg'
import logo from '../../assets/styles/Navbar.module.css';

const Logo = () => {
    const router = useRouter();
    // console.log(router, "route")
    return (
        <>
            <div className={logo.logoBox}>
                {
                    (router.asPath === '/codesta' || router.asPath === "/features/codesta" || router.asPath === "/latest-activity/codesta") ? (
                        <Image
                            src={codesta}
                            alt='codesta logo'
                            height={40}
                            width={60}
                        // layout='responsive'
                        />
                    ) : (
                        <Image
                            src={uemLogo}
                            alt='codesta logo'
                            height={40}
                            width={60}
                        // layout='responsive'
                        />
                    )
                }
            </div>
        </>
    )
}

export default Logo