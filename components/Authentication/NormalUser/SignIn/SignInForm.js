import React, { useState, } from 'react';
import { Card, Input, Text, Button, Spacer, Grid, useTheme, Link, Modal, } from '@nextui-org/react';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import { signInSchema } from '../../../../utils/validation/superAdmin/signInSchema';
import sign from '../../../../assets/styles/superAdmin/sign.module.css';
import MyIcon from '../../../../utils/icon';
import { IconContext } from 'react-icons';
import { SiGoogle } from 'react-icons/si';
import SignUpWithGoogle from '../../SuperAdmin/SignUp/SignUpWithGoogle';
import GAuthInitializer from '../../HOC/GAuthInitializer';
import { googleSignInSchema } from '../../../../utils/validation/superAdmin/googleSignInSchema';

const { Mail, Password } = MyIcon;

const SignInForm = () => {
    const { isDark } = useTheme();
    const borderCol = isDark ? '#313538' : '#c9c7da';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const [visible, setVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        validationSchema: signInSchema,
    });

    const modalFormik = useFormik({
        initialValues: {
            tokenId: ''
        },
        onSubmit: value => {
            console.log(value, 'modalformk');
            closeHandler();
        },
        validationSchema: googleSignInSchema,
    })

    const errorText = (key, obj) => {
        return obj.touched[key] && obj.errors[key] ? obj.errors[key] : '';
    }
    const errorColor = (key, obj) => {
        return obj.touched[key] && obj.errors[key] ? 'error' : 'secondary';
    }

    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };



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
                            <Spacer y={1} />
                            <Input.Password
                                label='Password'
                                name='password'
                                placeholder='Enter your password'
                                bordered
                                color={errorColor('password', formik)}
                                labelLeft={
                                    <Password fill={'#A66CFF'} />
                                }
                                fullWidth={true}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                type={'password'}
                                helperText={errorText('password', formik)}
                                helperColor={errorColor('password', formik)}
                                clearable
                            />

                            <Spacer y={1} />
                            <Grid.Container gap={1} justify='space-around'>
                                <Grid>
                                    <Button color='secondary' flat type='submit'>Sign In</Button>
                                </Grid>
                                <Grid>
                                    <Button
                                        onClick={handler}
                                        color='secondary'
                                        bordered
                                    >
                                        <IconContext.Provider value={{ size: 20, color: '#C689C6', style: { marginRight: 4 } }}>
                                            <SiGoogle />
                                        </IconContext.Provider>

                                        Sign In with Google
                                    </Button>
                                </Grid>
                            </Grid.Container>
                            <Spacer y={0.2} />

                        </form>
                    </div>
                    <Grid.Container justify='space-evenly' gap={1}>
                        <Grid>
                            <Text
                                size={16}
                                css={{
                                    display: 'inline'
                                }}
                            >
                                Create an account? &nbsp;
                            </Text>
                            <NextLink href='/sign-up'>
                                <Link
                                    href=''
                                    color={'secondary'}
                                    css={{ display: 'inline' }}
                                >
                                    Sign Up
                                </Link>
                            </NextLink>

                        </Grid>
                        <Grid>
                            <NextLink href='/sign-in?forget-password=true'>
                                <Link
                                    href=''
                                    color={'primary'}
                                    css={{ display: 'inline' }}
                                >
                                    Forget password?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>


            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                preventClose
            >
                <Modal.Header>
                    <Text
                        h1
                        size={24}
                        css={{
                            textGradient: headerColor,
                            textAlign: 'center'
                        }}
                        weight="bold"
                        className={sign.responsiveHeader}
                    >
                        Sign In with Google
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div className={sign.formBody}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                modalFormik.handleSubmit(e);
                            }}
                            id='modalForm'
                        >
                            <GAuthInitializer>
                                <SignUpWithGoogle
                                    onSignIn={(token) => {
                                        modalFormik.setFieldValue('tokenId', token)
                                    }}
                                    buttonText="Sign In"
                                />
                            </GAuthInitializer>
                            {modalFormik.touched.tokenId && modalFormik.errors.tokenId && (<div className={sign.helperBox}>
                                <p className={sign.helpText}>
                                    {errorText('tokenId', modalFormik)}
                                </p>
                            </div>)}
                        </form>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto
                        color='secondary'
                        flat
                        type='submit'
                        form='modalForm'
                    >
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SignInForm