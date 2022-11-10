import React from 'react';
import home from '../../assets/styles/codesta/home.module.css';
import { Text, Grid, useTheme, Link } from '@nextui-org/react';
import { CgDesignmodo } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import dynamic from 'next/dynamic';

const Footer = () => {
    const { isDark } = useTheme();
    const textColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const nameColor = isDark ? '#571D91' : '#9BA1A6';

    return (
        <div className={home.pContainer}>
            <Grid.Container justify='center'>
                <Grid>

                    <Text i size={16} css={{ textGradient: textColor, display: 'inline' }}>
                        Design by &nbsp;
                    </Text>

                    <Link
                        href='https://www.debkantapradhan.me/'
                        target={'_blank'}
                        css={{ color: nameColor, fontStyle: 'italic', display: 'inline' }}
                    >
                        @Debkanta
                        <IconContext.Provider value={{ style: { marginLeft: 3, color: nameColor, display: 'inline' } }}>
                            <CgDesignmodo />
                        </IconContext.Provider>
                    </Link>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });