import React, { useState } from "react";
import { Dropdown, Avatar, Text, Grid, useTheme, Row, Col, Switch } from "@nextui-org/react";
import MyIcon from '../../utils/icon';
import { GiSettingsKnobs } from 'react-icons/gi';
import { AiOutlineLogout } from 'react-icons/ai';
import { TbLayoutDashboard } from 'react-icons/tb';
import Logout from "../Authentication/NormalUser/Logout";
import { useWindowSize } from '../../utils/customHooks/resizeObserver';
import { useTheme as useNextTheme } from 'next-themes'
import { useColorMode } from "@chakra-ui/react";


const { NotificationIcon, UserIcon, SunIcon, MoonIcon } = MyIcon;


export default function UserProfile() {
    const [selectKey, setSelectKey] = useState('');
    const { colorMode, toggleColorMode } = useColorMode();
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const windowSize = useWindowSize();


    const handleSelect = (key) => {
        console.log(key, " selected key")
        setSelectKey(key);
    }

    return (
        <>
            <Grid.Container>
                <Grid>
                    <Dropdown>
                        <Dropdown.Trigger >
                            <Avatar
                                bordered
                                size="md"
                                as="button"
                                color="secondary"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            // text="D"
                            />
                        </Dropdown.Trigger>
                        <Dropdown.Menu
                            color="secondary"
                            aria-label="Avatar_Actions"
                            id="Avatar_Actions"
                            onAction={(key) => { handleSelect(key) }}
                            isVirtualized={true}
                        >
                            <Dropdown.Item key="profile" css={{ height: "$18" }}
                                icon={<UserIcon size={22} fill="var(--nextui-colors-secondary)" />}
                            >
                                <Text color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex", size: 14 }}>
                                    zoey@example.com
                                </Text>
                            </Dropdown.Item>

                            <Dropdown.Item
                                key="dashboard"
                                withDivider
                                icon={<TbLayoutDashboard size={22} color="var(--nextui-colors-secondary)" />}
                            >
                                My Dashboard
                            </Dropdown.Item>

                            <Dropdown.Item
                                key="notification"
                                icon={<NotificationIcon size={22} fill="var(--nextui-colors-secondary)" />}
                            >
                                Notification
                            </Dropdown.Item>
                            <Dropdown.Item key="settings"
                                icon={<GiSettingsKnobs color="var(--nextui-colors-secondary)" />}
                            >
                                Settings
                            </Dropdown.Item>

                            <Dropdown.Item key="logout" color="error"
                                withDivider
                                icon={<AiOutlineLogout color="var(--nextui-colors-error)" />}
                            >
                                Log Out
                            </Dropdown.Item>
                            {windowSize <= 425 && (
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
                </Grid>
            </Grid.Container>

            {
                selectKey === 'logout' && (
                    <Logout isOpen={true} onAction={handleSelect} />
                )
            }
        </>
    );
}
