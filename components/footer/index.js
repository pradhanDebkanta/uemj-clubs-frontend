import React from 'react';
import home from '../../assets/styles/codesta/home.module.css';
import { Text, Grid, useTheme, Link } from '@nextui-org/react';
import { CgDesignmodo } from 'react-icons/cg';
import { IconContext } from 'react-icons';

const Footer = () => {
    const { isDark } = useTheme();
    const textColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";
    const nameColor = isDark ? '#571D91' : '#9BA1A6';

    return (
        <div className={home.pContainer}>
            <Grid.Container justify='center'>
                <Grid>

                    <Text i size={16} css={{ textGradient: textColor }}>
                        Design by &nbsp;
                    </Text>

                    <Link
                        href='https://www.linkedin.com/in/debkanta-pradhan-4b6399193/'
                        target={'_blank'}
                        css={{ color: nameColor, fontStyle: 'italic' }}
                    >
                        @DK
                        <IconContext.Provider value={{ style: { marginLeft: 2, color: nameColor } }}>
                            <CgDesignmodo />
                        </IconContext.Provider>
                    </Link>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default Footer;