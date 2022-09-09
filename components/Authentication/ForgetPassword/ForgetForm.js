import React from 'react';
import { Card, Input, Text, Button, Spacer, Grid, } from '@nextui-org/react';
import { useFormik } from 'formik';
import sign from '../../../assets/styles/superAdmin/sign.module.css';
import MyIcon from '../../../utils/icon';
import { forgetPasswordSchema } from '../../../utils/validation/superAdmin/forgetPasswordSchema';

const { Mail } = MyIcon;

const ForgetForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        validationSchema: forgetPasswordSchema,
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

                        <form onSubmit={formik.handleSubmit}>
                            <Input
                                label='Register Email'
                                name='email'
                                type={'email'}
                                placeholder='Enter your email id'
                                bordered
                                color={errorColor('email', formik)}
                                labelLeft={
                                    <Mail fill={'#A66CFF'} />
                                }
                                fullWidth={true}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                helperText={errorText('email', formik)}
                                helperColor={errorColor('email', formik)}
                                clearable
                            />
                            <Spacer y={0.5} />
                            <Grid.Container gap={1} justify='start'>
                                <Grid>
                                    <Text
                                        size={14}
                                    >
                                        You will received an OTP on the registered email. <br />
                                        The OTP will validate for 10 min. Enter the correct OTP on next screen and reset your password.

                                    </Text>

                                </Grid>
                            </Grid.Container>

                            <Spacer y={1} />

                            <Grid.Container gap={1} justify='center'>
                                <Grid>
                                    <Button color='secondary' flat type='submit'>Confirm Email</Button>
                                </Grid>
                            </Grid.Container>
                        </form>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default ForgetForm