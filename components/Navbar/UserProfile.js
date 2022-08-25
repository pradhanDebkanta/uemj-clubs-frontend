import React, { useState } from "react";
import { Dropdown, Avatar, Text, Grid, } from "@nextui-org/react";
import MyIcon from '../../utils/icon';
import { GiSettingsKnobs } from 'react-icons/gi';
import { AiOutlineLogout } from 'react-icons/ai';
import { TbLayoutDashboard } from 'react-icons/tb';
import Logout from "../Authentication/NormalUser/Logout";

const { NotificationIcon, UserIcon } = MyIcon;


export default function UserProfile() {
    const [selectKey, setSelectKey] = useState('');

    const handleSelect = (key) => {
        console.log(key, " selected key")
        setSelectKey(key);
    }

    return (
        <>
            <Grid.Container>
                <Grid>
                    <Dropdown placement="bottom-left" trigger="longPress">
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
                        <Dropdown.Menu color="secondary" aria-label="Avatar_Actions" id="Avatar_Actions" onAction={(key) => { handleSelect(key) }}>
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
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid>
            </Grid.Container>

            {
                selectKey === 'logout' && (
                    <Logout isOpen={true} onAction={handleSelect}/>
                )
            }
        </>
    );
}
