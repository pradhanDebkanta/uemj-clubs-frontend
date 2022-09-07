import React, { useCallback, useMemo } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Switch, useTheme, Navbar, Avatar, Dropdown, Text, Link, Row, Col } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useColorMode } from '@chakra-ui/react';
import MyIcon from '../../utils/icon';
import { Layout } from './Layout';
import Logo from './Logo';
import { GiSettingsKnobs } from 'react-icons/gi';
import { AiOutlineLogout } from 'react-icons/ai';
import { useWindowSize } from '../../utils/customHooks/resizeObserver';
import { icons } from '../../utils/icon/newIcon';
import navCss from '../../assets/styles/superAdmin/adminNavbar.module.css';
import { GiNotebook } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';
import { IconContext } from 'react-icons';


const { NotificationIcon, MoonIcon, SunIcon, UserIcon } = MyIcon;
const collapseItems = [
    "Dashboard",
    "Events",
    "Members",
    "Campaign",
    "Others",
];

const ANavbar = () => {
    const { isDark } = useTheme();
    const { setTheme } = useNextTheme();
    const { colorMode, toggleColorMode } = useColorMode();
    const windowSize = useWindowSize();
    const router = useRouter();

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

    return (
        <Layout>
            <Navbar
                shouldHideOnScroll={true}
                variant={'sticky'}
                isCompact={windowSize <= 725}
            >
                <Navbar.Toggle showIn="xs" />
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
                                showFullDescription
                                description="To communicate with one to one."
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
                                showFullDescription
                                description="To communicate with all members."
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
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    {windowSize > 525 && (
                        <Navbar.Item>
                            <Switch
                                checked={isDark}
                                size="xs"
                                color={'secondary'}
                                iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                                iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                                preventDefault
                                shadow
                                css={{

                                }}
                                onChange={(e) => {
                                    setTheme(e.target.checked ? 'dark' : 'light');
                                    toggleColorMode();
                                }}
                            />
                        </Navbar.Item>
                    )}
                    <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="secondary"
                                    size="md"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="secondary"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                            <Dropdown.Item
                                key="profile"
                                css={{ height: "$18" }}
                                icon={<UserIcon size={22} fill="var(--nextui-colors-secondary)" />}
                            >
                                <Text color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    zoey@example.com
                                </Text>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="settings"
                                withDivider
                                icon={<GiSettingsKnobs color="var(--nextui-colors-secondary)" />}
                            >
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="notification"
                                icon={<NotificationIcon size={22} fill="var(--nextui-colors-secondary)" />}
                            >
                                Notification
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="logout"
                                withDivider
                                color="error"
                                icon={<AiOutlineLogout color="var(--nextui-colors-error)" />}

                            >
                                Log Out
                            </Dropdown.Item>
                            {windowSize <= 525 && (
                                <Dropdown.Item
                                    key="changeTheme"
                                    color='secondery'
                                    withDivider
                                    icon={
                                        <>
                                            {isDark ? (<MoonIcon filled style={{ color: '#FF6BD5' }} size={15} />)
                                                : (
                                                    <SunIcon filled style={{ color: '#F8C572' }} size={15} />
                                                )}
                                        </>
                                    }
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Text
                                                color='secondary'
                                            >
                                                Change Theme
                                            </Text>

                                        </Col>
                                        <Col span={2}>
                                            <Switch
                                                checked={isDark}
                                                size="xs"
                                                color={'secondary'}
                                                iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                                                iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                                                preventDefault
                                                css={{
                                                    // marginRight: 12,
                                                    marginTop: 4

                                                }}
                                                onChange={(e) => {
                                                    setTheme(e.target.checked ? 'dark' : 'light');
                                                    toggleColorMode();
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem
                            key={item}
                            activeColor="secondary"
                            css={{
                                color: index === collapseItems.length - 1 ? "$error" : "",
                            }}
                            isActive={index === 0}
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </Layout>
    )
}

export default ANavbar



