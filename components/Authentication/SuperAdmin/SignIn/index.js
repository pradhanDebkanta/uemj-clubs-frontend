import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Text, useTheme, Spacer, Grid } from '@nextui-org/react';
import sign from '../../../../assets/styles/superAdmin/sign.module.css';
import home from '../../../../assets/styles/codesta/home.module.css';
import DoorLogin from '../../../../utils/svg/DoorLogin';

const SignInForm = dynamic(() => import('./SignInForm'), {
    ssr: false,
})

const SignIN = () => {
    const { isDark } = useTheme();
    const iconColor = isDark ? '#FF2EC4' : '#17C964';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    return (
        <Container>
            <div className={sign.container}>
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
                    Sign In
                </Text>
                <Spacer y={1.2} />
                <Grid.Container gap={1} justify='center'>
                    <Grid sm={6}>
                        <SignInForm />
                    </Grid>
                    <Grid sm={6}>
                        <div className={home.svg}>
                            <DoorLogin />
                        </div>
                    </Grid>
                </Grid.Container>

            </div>
        </Container>
    )
}

export default SignIN