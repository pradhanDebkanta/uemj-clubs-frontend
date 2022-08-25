import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Text, Spacer, useTheme, Grid } from '@nextui-org/react';
import {
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import { SiFoursquarecityguide } from 'react-icons/si';
import home from '../../assets/styles/codesta/home.module.css';

const Presentation = dynamic(() => import('../../utils/svg/Presentation'), {
    ssr: false
})


const facilityDetails = [
    {
        detail: 'Discuss your problems with our teachers directly.',
        Icon: SiFoursquarecityguide
    },
    {
        detail: 'Participants can contact our coordinators if they want to know more and learn and understand any part regarding computer coding ,we will happily help you and guide you like with teachers they can contact further regarding similar problems.',
        Icon: SiFoursquarecityguide
    },
    {
        detail: 'If you don’t have a laptop but want to learn , let us know , we will arrange everything for your learning .',
        Icon: SiFoursquarecityguide
    },
    {
        detail: 'Guidance will be provided for free regarding coding journey.',
        Icon: SiFoursquarecityguide
    },
]

const Facility = () => {
    const { isDark } = useTheme();
    const iconColor = isDark ? '#FF2EC4' : '#17C964';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const allFacilities = useCallback(() => {
        return (
            <>
                {facilityDetails?.map((item, idx) => {
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
                Facilities
            </Text>
            <Spacer y={-1.2} />
            <Grid.Container gap={1} alignItems='center'>
                <Grid sm={6} >
                    <div className={home.svg}>
                        <Presentation />
                    </div>
                </Grid>
                <Grid sm={6} >
                    <List spacing={3.5}>
                        {allFacilities()}
                    </List>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default Facility