import React, { useRef, useEffect, useState } from 'react';
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
    const [isLastFull, setLastFull] = useState(false);
    const [lastValue, setlastValue] = useState('');

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
        console.log(num.length);
        if (num.length === 1) {
            console.log('inside if');
            if (next !== null) {
                next.current.focus();
            }
        }

    }

    const formik = useFormik({
        initialValues: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
        },

        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        validationSchema: otpSchema,
    });

    const errorText = (key, obj) => {
        return obj.touched[key] && obj.errors[key] ? obj.errors[key] : '';
    }
    const errorColor = (key, obj) => {
        return obj.touched[key] && obj.errors[key] ? 'error' : 'secondary';
    }

    useEffect(() => {
        // console.log('hii');
        const { one, two, three, four, five, six } = formik.values
        if (one && two && three && four && five && six) {
            console.log('all filed');
        }

    }, [formik])

    useEffect(() => {
        // if (isLastFull) {
            ref6.current.value = lastValue;
            // }
        }, )
        console.log('dkkkk', ref6);

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
                                {/* {console.log(formik.errors, 'er', formik.values)} */}
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref1}
                                        name='one'
                                        value={formik.values.one}
                                        underlined
                                        color={errorColor('one', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref1, ref2);
                                            formik.handleChange(e);
                                        }}
                                        className={sign.inputText}
                                    />

                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref2}
                                        value={formik.values.two}
                                        name='two'
                                        underlined
                                        color={errorColor('two', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref2, ref3);
                                            formik.handleChange(e);
                                        }}
                                        className={sign.inputText}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref3}
                                        value={formik.values.three}
                                        name='three'
                                        underlined
                                        color={errorColor('three', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref3, ref4);
                                            formik.handleChange(e);
                                        }}
                                        className={sign.inputText}

                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref4}
                                        value={formik.values.four}
                                        name='four'
                                        underlined
                                        color={errorColor('four', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref4, ref5);
                                            formik.handleChange(e);
                                        }}
                                        className={sign.inputText}

                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref5}
                                        value={formik.values.five}
                                        name='five'
                                        underlined
                                        color={errorColor('five', formik)}
                                        onChange={(e) => {
                                            autoFocus(e.target.value, ref5, ref6);
                                            formik.handleChange(e);
                                        }}
                                        className={sign.inputText}

                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref6}
                                        // value={isLastFull ? lastValue : formik.values.six}
                                        value={lastValue}
                                        name='six'
                                        underlined
                                        color={errorColor('six', formik)}
                                        onChange={(e) => {
                                            console.log(e.target.value, e.target.value.length, 'len', lastValue, ref6.current.value)
                                            if (e.target.value.length <= 1) {
                                                setLastFull(true);
                                                setlastValue(e.target.value)
                                                formik.handleChange(e);
                                            } else {
                                                // setLastFull(false);
                                                // ref6.current.value = lastValue;
                                            }
                                        }}
                                        className={sign.inputText}

                                    />
                                </Col>

                            </Row>
                            <div className={sign.inputErrorBox}>
                                {
                                    Object.keys(formik?.touched).length !== 0 && Object.keys(formik.errors).length !== 0 && (
                                        <Text
                                            color='error'
                                            size={14}
                                        >
                                            Please Enter valid OTP.
                                        </Text>
                                    )
                                }
                            </div>
                            <Spacer y={1} />
                            <Grid.Container gap={1} justify='space-evenly'>
                                <Grid>
                                    <Button color='secondary' flat type='submit'>Confirm OTP</Button>
                                </Grid>
                                <Grid>
                                    <Button color='secondary' flat >Resend OTP</Button>
                                </Grid>
                            </Grid.Container>
                        </form>
                        {/* <input
                            type={'number'}
                            onChange={(e) => {
                                console.log(e.target.value, '');
                                if (e.target.value.length <= 1) {
                                    setlastValue(e.target.value)
                                }
                            }}
                            value={lastValue}
                        /> */}
                        {/* <Input
                            type={'text'}
                            value={'Something..'}
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            bordered
                        /> */}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default OtpForm