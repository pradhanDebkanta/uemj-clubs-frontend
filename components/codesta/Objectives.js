import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Text, Spacer, useTheme, Grid } from '@nextui-org/react';
import {
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import { MdOutlineEmojiObjects } from 'react-icons/md';
import home from '../../assets/styles/codesta/home.module.css';

const Organizer = dynamic(() => import('../../utils/svg/Organizer'), {
    ssr: false
})

const objectiveDetails = [
    {
        detail: 'Conduct more coding competitions to reach every student on campus',
        Icon: MdOutlineEmojiObjects
    },
    {
        detail: 'Organize an event during the annual techno-cultural fest of UEM JAIPUR',
        Icon: MdOutlineEmojiObjects
    },

    {
        detail: 'Conduct workshops on areas of computer science like web development, application development, machine learning, IoT etc.',
        Icon: MdOutlineEmojiObjects
    },

    {
        detail: 'Contribute to open source projects, build websites and applications, provide technical support to organizations and various clubs on campus.',
        Icon: MdOutlineEmojiObjects
    },

    {
        detail: 'Represent the college at inter-collegiate events.',
        Icon: MdOutlineEmojiObjects
    },

    {
        detail: 'Take part in competitions like ACM-ICPC, Google Code Jam, Google Summer of Code, and other online coding events.',
        Icon: MdOutlineEmojiObjects
    },

]

const Objectives = () => {
    const { isDark } = useTheme();
    const iconColor = isDark ? '#FF2EC4' : '#17C964';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const allObjectives = useCallback(() => {
        return (
            <>
                {objectiveDetails?.map((item, idx) => {
                    return (
                        <ListItem key={idx} >
                            <Text size={16} className={home.text} >
                                <ListIcon as={item.Icon} color={iconColor} size={18} />
                                {item.detail}
                            </Text>
                        </ListItem>
                    )
                })}
            </>
        )
    }, [iconColor])

    return (
        <div className={home.pContainer}>
            <Text
                h1
                size={45}
                css={{
                    textGradient: headerColor,
                    textAlign: 'center'
                }}
                weight="bold"
                className={home.responsiveText}
            >
                Objectives
            </Text>
            <Spacer y={1.2} />
            <Grid.Container gap={1} alignItems='center'>

                <Grid sm={6} >
                    <List spacing={3.5}>
                        {allObjectives()}
                    </List>
                </Grid>
                <Grid sm={6} >
                    <div className={home.svg}>
                        <Organizer />
                    </div>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default Objectives