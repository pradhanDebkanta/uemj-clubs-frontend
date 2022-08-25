import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { Text, Spacer, useTheme } from '@nextui-org/react';
import home from '../../../assets/styles/codesta/home.module.css'
import PastActivity from './PastActivity';
import CurrentActivity from './CurrentActivity';
import UpcommigActivity from './UpcommigActivity';

const Header = () => {
    const { isDark } = useTheme();
    const iconColor = isDark ? '#FF2EC4' : '#17C964';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    return (
        <div className={home.container}>
            <Text
                h1
                size={40}
                css={{
                    textGradient: headerColor,
                    textAlign: 'center',
                    paddingTop: '1.5rem'
                }}
                weight="bold"
                className={home.responsiveText}
            >
                Latest Activity
            </Text>
            <Spacer y={1.5} />

            <Tabs isFitted variant='enclosed' defaultIndex={1}>
                <TabList mb='1em'>
                    <Tab>Past Activity</Tab>
                    <Tab>Current Activity</Tab>
                    <Tab>Upcoming Activity</Tab>
                </TabList>
                
                <TabPanels>
                    <TabPanel>
                        <PastActivity />
                    </TabPanel>
                    <TabPanel>
                        <CurrentActivity />
                    </TabPanel>
                    <TabPanel>
                        <UpcommigActivity />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Header