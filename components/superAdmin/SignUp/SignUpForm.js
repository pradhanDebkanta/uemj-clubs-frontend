import React from 'react';
import { Card, Input, Text, Button, Spacer, Grid, useTheme, Link } from '@nextui-org/react';
import { Select } from '@chakra-ui/select';
import { useFormik } from 'formik';
import { signUpSchema } from '../../../utils/validation/superAdmin/signUpSchema';
import sign from '../../../assets/styles/superAdmin/sign.module.css';
import MyIcon from '../../../utils/icon';
import { IoBagCheckOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons';
import NextLink from 'next/link';

const { UserIcon, Mail, Password } = MyIcon;

const SignUpForm = () => {
    const { isDark } = useTheme();
    const borderCol = isDark ? '#313538' : '#c9c7da';

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            accountType: ''
        },
        onSubmit: (value, err) => {
            console.log(err, 'err');
            console.log(value, 'formik');

        },
        validationSchema: signUpSchema,
    })

    const errorText = (key) => {
        return formik.touched[key] && formik.errors[key] ? formik.errors[key] : '';
    }
    const errorColor = (key) => {
        return formik.touched[key] && formik.errors[key] ? 'error' : 'secondary';
    }

    return (
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
                            color={errorColor('name')}
                            labelLeft={
                                <UserIcon fill={'#A66CFF'} />
                            }
                            fullWidth={true}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            required
                            helperText={errorText('name')}
                            helperColor={errorColor('name')}

                        />
                        {/* {console.log(formik.touched, 'dj', formik.errors)} */}

                        <Spacer y={1} />
                        <Input
                            label='Register Email'
                            name='email'
                            type={'email'}
                            placeholder='Enter your email id'
                            bordered
                            color={errorColor('email')}
                            labelLeft={
                                <Mail fill={'#A66CFF'} />
                            }
                            fullWidth={true}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required
                            helperText={errorText('email')}
                            helperColor={errorColor('email')}
                        />
                        <Spacer y={1} />
                        <Input.Password
                            label='Password'
                            name='password'
                            placeholder='Enter a strong password'
                            bordered
                            color={errorColor('password')}
                            labelLeft={
                                <Password fill={'#A66CFF'} />
                            }
                            fullWidth={true}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            required
                            type={'password'}
                            helperText={errorText('password')}
                            helperColor={errorColor('password')}

                        />
                        <Spacer y={1} />
                        <Input
                            label='Confirm Password'
                            name='confirmPassword'
                            type={'password'}
                            placeholder='Re enter the password'
                            bordered
                            color={errorColor('confirmPassword')}
                            labelLeft={
                                <IconContext.Provider value={{ size: 24, color: '#A66CFF' }}>
                                    <IoBagCheckOutline />
                                </IconContext.Provider>
                            }
                            fullWidth={true}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            required
                            helperText={errorText('confirmPassword')}
                            helperColor={errorColor('confirmPassword')}
                        />
                        <Spacer y={1} />
                        <Select
                            placeholder='Select Account type'
                            name='accountType'
                            // focusBorderColor='#A66CFF'
                            focusBorderColor={errorColor('accountType') === 'secondary' ? '#A66CFF' : '#F31260'}
                            isRequired={true}
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
                                {errorText('accountType')}
                            </p>
                        </div>)}

                        <Spacer y={1} />
                        <Grid.Container gap={1} justify='space-around'>
                            <Grid>
                                <Button color='secondary' flat type='submit'>Sign Up</Button>
                            </Grid>
                            <Grid>
                                <Button >G signup</Button>
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
    )
}

export default SignUpForm