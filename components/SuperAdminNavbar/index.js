import React, { useCallback, useEffect, useState, useRef } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Dropdown, useTheme } from '@nextui-org/react';

import { Layout } from '../AdminNavbar/Layout';
import Logo from './Logo';
import MobileNavbar from './MobileNavbar';
import UserProfile from './UserProfile';
import { icons } from '../../utils/icon/newIcon';
import navCss from '../../assets/styles/superAdmin/adminNavbar.module.css';
import NavItems from './NavItem';
import throttle from '../../utils/customHooks/throttle';
import dynamic from 'next/dynamic';


const SANavbar = () => {
    const [windowSize, setWindowSize] = useState(window?.innerWidth);
    const router = useRouter();
    const toggleRef = useRef(null);
    const [toggleOpen, setToggleOpen] = useState(false);
    const { isDark } = useTheme();

    const activeRoute = useCallback((route) => {
        if (router.pathname.includes(route))
            return true;
        else
            return false;

    }, [router]);

    const activeButton = useCallback((items) => {
        let urlArr = items.map(item => (item.url));
        if (urlArr.indexOf(router.asPath) !== -1) {
            return true;
        } else {
            return false
        }

    }, [router])

    const handleDropdown = key => {
        console.log(key);
        if (key === 'co_ordinator') {
            router.push('/super-admin/members/co-ordinators');
        }
        else if (key === 'club_members') {
            router.push('/super-admin/members/club-members');
        }
        else if (key === 'unicast') {
            router.push("/super-admin/campaign/unicast");
        }
        else if (key === 'broadcast') {
            router.push('/super-admin/campaign/broadcast');
        }
        else if (key === 'events') {
            router.push('/super-admin/events');
        }
        else {
            return;
        }
    }

    const handleToggle = useCallback(flag => {
        if (flag) {
            toggleRef?.current?.click();
        }
    }, []);

    const throttleWindowSize = throttle(() => {
        // console.log('resize');
        setWindowSize(window?.innerWidth);
    }, 2000);

    useEffect(() => {
        if (window !== undefined) {
            window?.addEventListener('resize', throttleWindowSize)
        }
    }, [])

    return (
        <>
            <Layout toggler={toggleOpen}>
                <Navbar
                    isCompact={windowSize <= 725}
                    isBordered={isDark}
                >
                    <Navbar.Toggle
                        showIn="xs"
                        ref={toggleRef}
                        onChange={(value) => setToggleOpen(value)}
                    />
                    <Navbar.Brand
                        css={{
                            "@xs": {
                                w: "12%",
                            },
                        }}
                    >
                        <div>
                            <Logo />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Content
                        enableCursorHighlight
                        activeColor="secondary"
                        hideIn="xs"
                        variant="highlight-rounded"
                    >
                        {NavItems?.map((item, idx) => {
                            return (
                                item?.child ? (
                                    <Dropdown key={item.key}>
                                        <Navbar.Item>
                                            <Dropdown.Button
                                                auto
                                                light
                                                css={{
                                                    px: 0,
                                                    dflex: "center",
                                                    svg: { pe: "none" },
                                                    "&:hover": {
                                                        color: 'var(--nextui--navbarItemHighlightTextColor)'
                                                    }
                                                }}
                                                iconRight={icons.chevron}
                                                ripple={false}
                                                className={navCss.dropdownButton}
                                                color={activeButton(item?.child) ? 'secondary' : 'default'}
                                            >
                                                {item.name}
                                            </Dropdown.Button>
                                        </Navbar.Item>
                                        <Dropdown.Menu
                                            aria-label={item.key}
                                            onAction={handleDropdown}
                                            css={{
                                                $$dropdownMenuWidth: "320px",
                                                $$dropdownItemHeight: "45px",
                                                "& .nextui-dropdown-item": {
                                                    py: "$4",
                                                    // dropdown item left icon
                                                    svg: {
                                                        color: "$secondary",
                                                        mr: "$4",
                                                    },
                                                    // dropdown item title
                                                    "& .nextui-dropdown-item-content": {
                                                        w: "100%",
                                                        fontWeight: "$semibold",
                                                    },
                                                },
                                            }}
                                        >
                                            {item?.child.map((childItem, idx) => {
                                                return (
                                                    <Dropdown.Item
                                                        key={childItem.key}
                                                        showFullDescription={false}
                                                        description={childItem?.description}
                                                        icon={childItem.icon}
                                                        css={{
                                                            '&:hover': {
                                                                color: '$secondary'
                                                            }
                                                        }}
                                                        color={activeRoute(childItem.url) ? 'secondary' : 'default'}
                                                    >
                                                        {childItem.name}
                                                    </Dropdown.Item>
                                                )
                                            })}

                                        </Dropdown.Menu>
                                    </Dropdown>
                                ) : (
                                    <NextLink href={item.url} key={item.key}>
                                        <Navbar.Link
                                            isActive={activeRoute(item.url)}
                                        >
                                            {item.name}
                                        </Navbar.Link>
                                    </NextLink>
                                )
                            )
                        })}

                    </Navbar.Content>
                    {/* for user profile section */}
                    <UserProfile />

                    {/* for mobile navbar */}

                    <MobileNavbar toggler={handleToggle} />
                </Navbar>
            </Layout>
        </>
    )
}

export default dynamic(() => Promise.resolve(SANavbar), { ssr: false });