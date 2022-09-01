import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Text, useTheme, Spacer, Grid } from '@nextui-org/react';
import sign from '../../../assets/styles/superAdmin/sign.module.css';
import home from '../../../assets/styles/codesta/home.module.css';
import MobileLogin from '../../../utils/svg/MobileLogin';

const SignUpForm = dynamic(() => import('./SignUpForm'), {
    ssr: false,
})

const SignUp = () => {
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
                    SignUp
                </Text>
                <Spacer y={1} />
                <Grid.Container gap={1} justify='center'>
                    <Grid sm={6}>
                        <SignUpForm />
                    </Grid>
                    <Grid sm={6}>
                        <div className={home.svg}>
                            <MobileLogin />
                        </div>
                    </Grid>
                </Grid.Container>

            </div>
        </Container>
    )
}

export default SignUp