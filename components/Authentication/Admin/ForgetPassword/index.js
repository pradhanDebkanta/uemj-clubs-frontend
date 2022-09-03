import React from 'react';
import dynamic from 'next/dynamic';
import { Container, Text, useTheme, Spacer, Grid } from '@nextui-org/react';
import sign from '../../../../assets/styles/superAdmin/sign.module.css';
import home from '../../../../assets/styles/codesta/home.module.css';
import ForgetSvg from '../../../../utils/svg/ForgetSvg';
import NewPasswordForm from './NewPasswordForm';
import OtpForm from './OtpForm';

const ForgetForm = dynamic(() => import('./ForgetForm'), {
    ssr: false
});

const ForgetPassword = () => {
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
                    Forget Password
                </Text>
                <Spacer y={1.2} />
                <Grid.Container gap={1} justify='center'>
                    <Grid sm={6}>
                        {/* <ForgetForm /> */}
                        <OtpForm />
                        {/* <NewPasswordForm/> */}
                    </Grid>
                    <Grid sm={6}>
                        <div className={home.svg}>
                            <ForgetSvg />
                        </div>
                    </Grid>
                </Grid.Container>

            </div>
        </Container>
    )
}

export default ForgetPassword