import React from "react";
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";


export default function UserProfile() {
    console.log('user profile')
    return (
        <>
            <Grid.Container>
                <Grid>
                    <Dropdown placement="bottom-left">
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                size="md"
                                as="button"
                                color="secondary"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                // text="D"
                            />
                        </Dropdown.Trigger>
                        <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                            <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    zoey@example.com
                                </Text>
                            </Dropdown.Item>

                            <Dropdown.Item key="help_and_feedback" withDivider>
                                Help & Feedback
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" color="error" withDivider>
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid>
            </Grid.Container>
        </>
    );
}
