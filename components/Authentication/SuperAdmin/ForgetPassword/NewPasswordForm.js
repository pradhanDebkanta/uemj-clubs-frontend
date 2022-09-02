import React, { } from 'react';
import { Card, Input, Text, Button, Spacer, Grid, useTheme, } from '@nextui-org/react';
import { useFormik } from 'formik';
import { resetPasswordSchema } from '../../../../utils/validation/superAdmin/forgetPasswordSchema';
import sign from '../../../../assets/styles/superAdmin/sign.module.css';
import MyIcon from '../../../../utils/icon';
import { IoBagCheckOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons';


const { Mail, Password } = MyIcon;

const NewPasswordForm = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const regEmail = 'abcd@gmail.com'

    const formik = useFormik({
        initialValues: {
            email: regEmail,
            password: '',
            confirmPassword: '',
        },
        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        validationSchema: resetPasswordSchema,
    });

    const errorText = (key, obj) => {
        return obj.touched[key] && obj.errors[key] ? obj.errors[key] : '';
    }
    const errorColor = (key, obj) => {
        return obj.touched[key] && obj.errors[key] ? 'error' : 'secondary';
    }


    return (
        <>
            <Card
                isHoverable
                variant="shadow"
            >
                <Card.Body>
                    <div className={sign.formBody}>

                        <Grid.Container gap={1} justify='center'>
                            <Grid>
                                <Text
                                    h3
                                    size={20}
                                    css={{
                                        textGradient: headerColor,
                                        textAlign: 'center',
                                        fontWeight: 700,
                                    }}
                                >
                                    Reset your password
                                </Text>
                            </Grid>
                        </Grid.Container>
                        <Spacer y={0.5} />
                        
                        <form onSubmit={formik.handleSubmit}>

                            <Input
                                label='Register Email'
                                name='email'
                                type={'email'}
                                placeholder='Your register email id'
                                bordered
                                color={errorColor('email', formik)}
                                labelLeft={
                                    <Mail fill={'#A66CFF'} />
                                }
                                fullWidth={true}
                                value={formik.values.email}
                                readOnly
                            />
                            <Spacer y={1} />
                            <Input.Password
                                label='Password'
                                name='password'
                                placeholder='Enter a strong password'
                                bordered
                                color={errorColor('password', formik)}
                                labelLeft={
                                    <Password fill={'#A66CFF'} />
                                }
                                fullWidth={true}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                // required
                                type={'password'}
                                helperText={errorText('password', formik)}
                                helperColor={errorColor('password', formik)}
                                clearable
                            />
                            <Spacer y={1} />
                            <Input
                                label='Confirm Password'
                                name='confirmPassword'
                                type={'password'}
                                placeholder='Re enter the password'
                                bordered
                                color={errorColor('confirmPassword', formik)}
                                labelLeft={
                                    <IconContext.Provider value={{ size: 24, color: '#A66CFF' }}>
                                        <IoBagCheckOutline />
                                    </IconContext.Provider>
                                }
                                fullWidth={true}
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                // required
                                helperText={errorText('confirmPassword', formik)}
                                helperColor={errorColor('confirmPassword', formik)}
                                clearable
                            />
                            <Spacer y={1} />
                            <Grid.Container gap={1} justify='center'>
                                <Grid>
                                    <Button color='secondary' flat type='submit'>Reset Password</Button>
                                </Grid>
                            </Grid.Container>
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default NewPasswordForm