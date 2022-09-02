import React, { useState, } from 'react';
import { Card, Input, Text, Button, Spacer, Grid, useTheme, Link, Modal, } from '@nextui-org/react';
import NextLink from 'next/link';
import { Select } from '@chakra-ui/select';
import { useFormik } from 'formik';
import { signUpSchema } from '../../../../utils/validation/superAdmin/signUpSchema';
import sign from '../../../../assets/styles/superAdmin/sign.module.css';
import MyIcon from '../../../../utils/icon';
import { IoBagCheckOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import { SiGoogle } from 'react-icons/si';
import SignUpWithGoogle from './SignUpWithGoogle';
import GAuthInitializer from '../../HOC/GAuthInitializer';
import { googleSignUpSchema } from '../../../../utils/validation/superAdmin/googleSignUpSchema';

const { UserIcon, Mail, Password } = MyIcon;

const SignUpForm = () => {
    const { isDark } = useTheme();
    const borderCol = isDark ? '#313538' : '#c9c7da';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const [visible, setVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            accountType: ''
        },
        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        validationSchema: signUpSchema,
    });

    const modalFormik = useFormik({
        initialValues: {
            accountType: '',
            tokenId: ''
        },
        onSubmit: value => {
            console.log(value, 'modalformk');
            closeHandler();
        },
        validationSchema: googleSignUpSchema,
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
                                label='Full Name'
                                name='name'
                                type={'text'}
                                placeholder='Enter your full name'
                                bordered
                                color={errorColor('name', formik)}
                                labelLeft={
                                    <UserIcon fill={'#A66CFF'} />
                                }
                                fullWidth={true}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                // required
                                helperText={errorText('name', formik)}
                                helperColor={errorColor('name', formik)}
                                clearable

                            />

                            <Spacer y={1} />
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
                                // required
                                helperText={errorText('email', formik)}
                                helperColor={errorColor('email', formik)}
                                clearable
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
                            <Select
                                placeholder='Select Account type'
                                name='accountType'
                                focusBorderColor={errorColor('accountType', formik) === 'secondary' ? '#A66CFF' : '#F31260'}
                                // isRequired={true}
                                borderRadius={12}
                                borderColor={borderCol}
                                borderWidth={2}
                                backgroundColor='transperent'
                                _hover={{
                                    transform: 'translateY(-1px)',
                                    transition: 'all 0.2s ease',
                                    borderColor: '#A66CFF'
                                }}
                                defaultValue={formik.values.accountType}
                                onChange={formik.handleChange}
                            >
                                <option value={'host'} className={sign.option}>Host</option>
                                <option value={'guest'} className={sign.option}>Guest</option>
                            </Select>
                            {formik.touched.accountType && formik.errors.accountType && (<div className={sign.helperBox}>
                                <p className={sign.helpText}>
                                    {errorText('accountType', formik)}
                                </p>
                            </div>)}

                            <Spacer y={1} />
                            <Grid.Container gap={1} justify='space-around'>
                                <Grid>
                                    <Button color='secondary' flat type='submit'>Sign Up</Button>
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

                                        Sign Up with Google
                                    </Button>
                                </Grid>
                            </Grid.Container>
                            <Spacer y={0.2} />

                        </form>
                    </div>
                    <Grid.Container justify='center'>
                        <Grid>
                            <Text
                                size={16}
                                css={{
                                    display: 'inline'
                                }}
                            >
                                Already have an account? &nbsp;
                            </Text>
                            <NextLink href='/super-admin/signin'>
                                <Link
                                    href=''
                                    color={'secondary'}
                                    css={{ display: 'inline' }}
                                >
                                    Sign In
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
                        Sign Up with Google
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
                            <Select
                                placeholder='Select Account type'
                                name='accountType'
                                focusBorderColor={errorColor('accountType', modalFormik) === 'secondary' ? '#A66CFF' : '#F31260'}
                                // isRequired={true}
                                borderRadius={12}
                                borderColor={borderCol}
                                borderWidth={2}
                                backgroundColor='transperent'
                                _hover={{
                                    transform: 'translateY(-1px)',
                                    transition: 'all 0.2s ease',
                                    borderColor: '#A66CFF'
                                }}
                                defaultValue={modalFormik.values.accountType}
                                onChange={modalFormik.handleChange}
                            >
                                <option value={'host'} className={sign.option}>Host</option>
                                <option value={'guest'} className={sign.option}>Guest</option>
                            </Select>
                            {modalFormik.touched.accountType && modalFormik.errors.accountType && (<div className={sign.helperBox}>
                                <p className={sign.helpText}>
                                    {errorText('accountType', modalFormik)}
                                </p>
                            </div>)}

                            <Spacer y={1} />
                            <GAuthInitializer>
                                <SignUpWithGoogle
                                    onSignIn={(token) => {
                                        modalFormik.setFieldValue('tokenId', token)
                                    }}
                                    buttonText='Sing Up'
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

export default SignUpForm