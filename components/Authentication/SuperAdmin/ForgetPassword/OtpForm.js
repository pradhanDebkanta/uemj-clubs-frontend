import React, { useRef, useEffect } from 'react';
import { Card, Input, Text, Button, Spacer, Grid, useTheme, Row, Col } from '@nextui-org/react';
import { useFormik } from 'formik';
import { otpSchema } from '../../../../utils/validation/superAdmin/forgetPasswordSchema';
import sign from '../../../../assets/styles/superAdmin/sign.module.css';
import MyIcon from '../../../../utils/icon';
import { IoBagCheckOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons';


const OtpForm = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    useEffect(() => {
        ref1?.current.focus();
    }, [])

    const autoFocus = (num, curr, next = null) => {
        console.log(num, curr, next, num.length);
        if (num.length === 1) {
            console.log('inside if');
            if (next !== null) {
                next.current.focus();
            }
        }

    }

    const formik = useFormik({
        initialValues: {
            one: null,
            two: null,
            three: null,
            four: null,
            five: null,
            six: null,
        },

        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        // validationSchema: otpSchema,
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
                                    OTP Confirmation
                                </Text>
                            </Grid>
                        </Grid.Container>
                        <Spacer y={0.5} />

                        <form onSubmit={formik.handleSubmit}>
                            <Row gap={0.5}>
                                {/* {console.log(formik.errors, 'er')} */}
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref1}
                                        initialValue={formik.values.one}
                                        bordered
                                        color={errorColor('one', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref1, ref2);

                                            formik.handleChange(e);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref2}
                                        initialValue={formik.values.two}
                                        bordered
                                        color={errorColor('two', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref2, ref3);

                                            formik.handleChange(e);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref3}
                                        initialValue={formik.values.three}
                                        bordered
                                        color={errorColor('three', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref3, ref4);

                                            formik.handleChange(e);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref4}
                                        initialValue={formik.values.four}
                                        bordered
                                        color={errorColor('four', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref4, ref5);

                                            formik.handleChange(e);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref5}
                                        initialValue={formik.values.five}
                                        bordered
                                        color={errorColor('five', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref5, ref6);

                                            formik.handleChange(e);
                                        }}

                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref6}
                                        initialValue={formik.values.six}
                                        bordered
                                        color={errorColor('six', formik)}
                                        onChange={(e) => {
                                            // autoFocus(e.target.value, ref6);

                                            formik.handleChange(e);
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Spacer y={1} />
                            <Grid.Container gap={1} justify='space-evenly'>
                                <Grid>
                                    <Button color='secondary' flat type='submit'>Confirm OTP</Button>
                                </Grid>
                                <Grid>
                                    <Button color='primary' flat >Resend OTP</Button>
                                </Grid>
                            </Grid.Container>
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default OtpForm