import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input, Text, Button, Spacer, Grid, useTheme, Link, Modal, Dropdown } from '@nextui-org/react';
import NextLink from 'next/link';
import { Select } from '@chakra-ui/select';
import { useFormik } from 'formik';
import sign from '../../../../assets/styles/superAdmin/sign.module.css';
import MyIcon from '../../../../utils/icon';
import { IoBagCheckOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import { SiGoogle } from 'react-icons/si';
import { GiTiedScroll } from 'react-icons/gi';
import SignUpWithGoogle from '../../SuperAdmin/SignUp/SignUpWithGoogle';
import GAuthInitializer from '../../HOC/GAuthInitializer';
import { signUpSchema } from '../../../../utils/validation/user/signUpSchema';
import { googleSignUpSchema } from '../../../../utils/validation/user/googleSignUpSchema';

const { UserIcon, Mail, Password } = MyIcon;

const clubs = [
    {
        name: 'Coding Club',
        value: 'coding_club',
    },
    {
        name: 'Nature Club',
        value: 'nature_club',
    },
    {
        name: 'Gaming Club',
        value: 'gaming_club',
    },
    {
        name: 'Music & Cultural',
        value: 'music_club',
    },
    {
        name: 'Photography',
        value: 'photography_club',
    },
];

const SignUpForm = () => {
    const { isDark } = useTheme();
    const [visible, setVisible] = useState(false);
    const borderCol = isDark ? '#313538' : '#c9c7da';
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const [selected, setSelected] = useState(new Set([]));

    const selectedValue = useMemo(() => {
        if (Array.from(selected)?.length === 0) {
            return 'Select club'
        } else {
            return Array.from(selected).join(", ").replaceAll("_", " ").slice(0, 15) + "...";
        }
    }, [selected]);

    useEffect(() => {
        let arr = Array.from(selected)
        formik.setFieldValue('clubName', arr);
        if (visible) {
            modalFormik.setFieldValue('clubName', arr);
        }
    }, [selected, visible])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            enrollmentNo: '',
            password: '',
            confirmPassword: '',
            clubName: [],
        },
        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        validationSchema: signUpSchema,
    });

    const modalFormik = useFormik({
        initialValues: {
            enrollmentNo: '',
            tokenId: '',
            clubName: [],
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
                                helperText={errorText('email', formik)}
                                helperColor={errorColor('email', formik)}
                                clearable
                            />
                            <Spacer y={1} />

                            <Input
                                label='Enrollment Number'
                                name='enrollmentNo'
                                type={'number'}
                                placeholder='Enter your collage enrollment no.'
                                bordered
                                color={errorColor('enrollmentNo', formik)}
                                labelLeft={
                                    <IconContext.Provider value={{ size: 24, color: '#A66CFF' }}>
                                        <GiTiedScroll />
                                    </IconContext.Provider>
                                }
                                fullWidth={true}
                                value={formik.values.enrollmentNo}
                                onChange={formik.handleChange}
                                helperText={errorText('enrollmentNo', formik)}
                                helperColor={errorColor('enrollmentNo', formik)}
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
                                helperText={errorText('confirmPassword', formik)}
                                helperColor={errorColor('confirmPassword', formik)}
                                clearable
                            />
                            <Spacer y={1} />

                            <Dropdown>
                                <Dropdown.Button
                                    flat
                                    css={{ tt: "capitalize" }}
                                    color={errorColor('clubName', formik)}
                                >
                                    {selectedValue}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Multiple selection actions"
                                    disallowEmptySelection
                                    selectionMode="multiple"
                                    color="secondary"
                                    selectedKeys={selected}
                                    onSelectionChange={(e) => {
                                        setSelected(e);
                                    }}
                                >
                                    {
                                        clubs.map((item, idx) => {
                                            return (
                                                <Dropdown.Item key={item.value}>{item.name}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            {formik.touched.clubName && formik.errors.clubName && (<div className={sign.helperBox}>
                                <p className={sign.helpText}>
                                    {errorText('clubName', formik)}
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
                            <NextLink href='/sign-in'>
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
                            <Input
                                label='Enrollment Number'
                                name='enrollmentNo'
                                type={'number'}
                                placeholder='Enter your collage enrollment no.'
                                bordered
                                color={errorColor('enrollmentNo', modalFormik)}
                                labelLeft={
                                    <IconContext.Provider value={{ size: 24, color: '#A66CFF' }}>
                                        <GiTiedScroll />
                                    </IconContext.Provider>
                                }
                                fullWidth={true}
                                value={modalFormik.values.enrollmentNo}
                                onChange={modalFormik.handleChange}
                                helperText={errorText('enrollmentNo', modalFormik)}
                                helperColor={errorColor('enrollmentNo', modalFormik)}
                                clearable
                            />
                            <Spacer y={1} />

                            <Dropdown>
                                <Dropdown.Button
                                    flat
                                    color={errorColor('clubName', modalFormik)}
                                    css={{ tt: "capitalize" }}
                                >
                                    {selectedValue}
                                </Dropdown.Button>
                                <Dropdown.Menu
                                    aria-label="Multiple selection actions"
                                    color="secondary"
                                    disallowEmptySelection
                                    selectionMode="multiple"
                                    selectedKeys={selected}
                                    onSelectionChange={(e) => {
                                        setSelected(e);
                                    }}
                                >
                                    {
                                        clubs.map((item, idx) => {
                                            return (
                                                <Dropdown.Item key={item.value}>{item.name}</Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            {modalFormik.touched.clubName && modalFormik.errors.clubName && (<div className={sign.helperBox}>
                                <p className={sign.helpText}>
                                    {errorText('clubName', modalFormik)}
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