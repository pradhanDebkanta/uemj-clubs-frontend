import React, { useCallback, useRef, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Navbar, Dropdown, useTheme } from '@nextui-org/react';
import { GiNotebook } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import { Layout } from './Layout';
import Logo from './Logo';
import MobileNavbar from './MobileNavbar';
import UserProfile from './UserProfile';
import { icons } from '../../utils/icon/newIcon';
import navCss from '../../assets/styles/superAdmin/adminNavbar.module.css';
import throttle from '../../utils/customHooks/throttle';
import dynamic from 'next/dynamic';


const ANavbar = () => {
    const [windowSize, setWindowSize] = useState(window?.innerWidth);
    const router = useRouter();
    const toggleRef = useRef(null);
    const [toggleOpen, setToggleOpen] = useState(false);
    const {isDark} = useTheme();

    const activeRoute = useCallback((route) => {
        if (router.pathname.includes(route))
            return true;
        else
            return false;

    }, [router]);

    const handleDropdown = key => {
        console.log(key);
        if (key === 'study_meterials') {
            router.push('/admin/codesta/study-meterials');
        } else if (key === 'unicast') {
            router.push('/admin/codesta/campaign/unicast');
        } else if (key === 'broadcast') {
            router.push('/admin/codesta/campaign/broadcast');
        } else {
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
        <Layout toggler={toggleOpen}>
            <Navbar
                isCompact={windowSize <= 725}
                isBordered={isDark}
            >
                <Navbar.Toggle
                    ref={toggleRef}
                    showIn="xs"
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
                    <NextLink href={'/admin/codesta/dashboard'}>
                        <Navbar.Link
                            isActive={activeRoute('dashboard')}
                        >
                            Dashboard
                        </Navbar.Link>
                    </NextLink>
                    <NextLink href="/admin/codesta/events">
                        <Navbar.Link
                            isActive={activeRoute('events')}
                        >
                            Events
                        </Navbar.Link>
                    </NextLink>
                    <NextLink href="/admin/codesta/members">
                        <Navbar.Link
                            isActive={activeRoute('members')}
                        >
                            Members
                        </Navbar.Link>
                    </NextLink>

                    <Dropdown >
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
                                color={activeRoute('unicast') || activeRoute('broadcast') ? 'secondary' : 'default'}
                            >
                                Campaign
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="campaign"
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

                            <Dropdown.Item
                                key="unicast"
                                showFullDescription={false}
                                description="Send a massage to perticular member, or communicate one to one."
                                icon={icons.activity}
                                css={{
                                    '&:hover': {
                                        color: '$secondary'
                                    }
                                }}
                                color={activeRoute('unicast') ? 'secondary' : 'default'}
                            >
                                Unicast
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="broadcast"
                                showFullDescription={false}
                                description="Send a massage to every member, or broadcast a massage with all."
                                icon={
                                    <IconContext.Provider value={{ size: 26 }}>
                                        <BsBroadcast />
                                    </IconContext.Provider>
                                }
                                css={{
                                    '&:hover': {
                                        color: '$secondary'
                                    },
                                }}
                                color={activeRoute('broadcast') ? 'secondary' : 'default'}
                            >
                                BroadCast
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                auto
                                light
                                css={{
                                    px: 0,
                                    dflex: "center",
                                    // svg: { pe: "none" },
                                    "&:hover": {
                                        color: 'var(--nextui--navbarItemHighlightTextColor)'
                                    }
                                }}
                                iconRight={icons.chevron}
                                ripple={false}
                                className={navCss.dropdownButton}
                            >
                                Others
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="others"
                            onAction={handleDropdown}
                            css={{
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
                            <Dropdown.Item
                                key="study_meterials"
                                icon={
                                    <IconContext.Provider value={{ size: 26 }}>
                                        <GiNotebook />
                                    </IconContext.Provider>
                                }
                                css={{
                                    '&:hover': {
                                        color: '$secondary'
                                    }
                                }}
                            >
                                Study Meterials
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                {/* for user profile section */}
                <UserProfile />

                {/* for mobile navbar */}

                <MobileNavbar toggler={handleToggle} />
            </Navbar>
        </Layout>
    )
}

export default dynamic(() => Promise.resolve(ANavbar), { ssr: false })



