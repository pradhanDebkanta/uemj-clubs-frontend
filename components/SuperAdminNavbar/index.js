import React from 'react';
import { Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useColorMode } from '@chakra-ui/react';
import MyIcon from '../../utils/icon';


const { MoonIcon, SunIcon } = MyIcon

const SANavbar = () => {
    const { isDark } = useTheme();
    const { setTheme } = useNextTheme();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>super admin navbar
            <Switch
                checked={isDark}
                size="sm"
                color={'secondary'}
                // bordered={true}
                iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                preventDefault
                shadow
                css={{
                    // marginRight: 12,
                    marginTop: 6

                }}
                onChange={(e) => {
                    setTheme(e.target.checked ? 'dark' : 'light');
                    toggleColorMode();
                }}
            />
        </div>
    )
}

export default SANavbar