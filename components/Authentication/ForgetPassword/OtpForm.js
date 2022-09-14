import React, { useRef, useEffect } from 'react';
import { Card, Text, Button, Spacer, Grid, useTheme, Row, Col, Tooltip } from '@nextui-org/react';
import { Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { otpSchema } from '../../../utils/validation/superAdmin/forgetPasswordSchema';
import sign from '../../../assets/styles/superAdmin/sign.module.css';
import { useWindowSize } from '.././../../utils/customHooks/resizeObserver';


const OtpForm = () => {
    const { isDark } = useTheme();
    const headerColor = isDark ? "45deg, $purple600 -20%, $pink600 100%" : "-20deg, #b721ff 0%, #21d4fd 100%";

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const size = useWindowSize();

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

    useEffect(() => {
        ref1?.current.focus();
    }, [])

    const autoFocus = (e, next = null) => {
        if (e.target.value.length <= 1) {
            formik.handleChange(e);
            if (e.target.value.length === 1 && next != null) {
                next.current.focus();
            }
        }
    }

    const errorColor = (key, obj) => {
        return obj.touched[key] && obj.errors[key] ? '#F31260' : 'var(--nextui-colors-secondaryLightContrast)';
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
                                <Text size={16}>
                                    OTP sent to abc******@gmail.com.
                                </Text>
                            </Grid>
                        </Grid.Container>
                        <Spacer y={0.5} />

                        <form onSubmit={formik.handleSubmit}>
                            <Row gap={size >= 525 ? 0.5 : 0}>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref1}
                                        name='one'
                                        value={formik.values.one}
                                        onChange={(e) => {
                                            autoFocus(e, ref2);
                                        }}
                                        className={sign.inputText}
                                        _focus={{
                                            borderColor: 'var(--nextui-colors-secondary)'
                                        }}
                                        _hover={{
                                            borderColor: '#4C5155'
                                        }}
                                        borderColor={errorColor('one', formik)}
                                    />

                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref2}
                                        value={formik.values.two}
                                        name='two'
                                        onChange={(e) => {
                                            autoFocus(e, ref3);
                                        }}
                                        className={sign.inputText}
                                        _focus={{
                                            borderColor: 'var(--nextui-colors-secondary)'
                                        }}
                                        _hover={{
                                            borderColor: '#4C5155'
                                        }}
                                        borderColor={errorColor('two', formik)}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref3}
                                        value={formik.values.three}
                                        name='three'
                                        onChange={(e) => {
                                            autoFocus(e, ref4);
                                        }}
                                        className={sign.inputText}
                                        _focus={{
                                            borderColor: 'var(--nextui-colors-secondary)'
                                        }}
                                        _hover={{
                                            borderColor: '#4C5155'
                                        }}
                                        borderColor={errorColor('three', formik)}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref4}
                                        value={formik.values.four}
                                        name='four'
                                        onChange={(e) => {
                                            autoFocus(e, ref5);

                                        }}
                                        className={sign.inputText}
                                        _focus={{
                                            borderColor: 'var(--nextui-colors-secondary)'
                                        }}
                                        _hover={{
                                            borderColor: '#4C5155'
                                        }}
                                        borderColor={errorColor('four', formik)}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref5}
                                        value={formik.values.five}
                                        name='five'
                                        onChange={(e) => {
                                            autoFocus(e, ref6);
                                        }}
                                        className={sign.inputText}
                                        _focus={{
                                            borderColor: 'var(--nextui-colors-secondary)'
                                        }}
                                        _hover={{
                                            borderColor: '#4C5155'
                                        }}
                                        borderColor={errorColor('five', formik)}
                                    />
                                </Col>
                                <Col>
                                    <Input
                                        type={'number'}
                                        ref={ref6}
                                        value={formik.values.six}
                                        name='six'
                                        onChange={(e) => {
                                            if (e.target.value.length <= 1) {
                                                formik.handleChange(e);
                                            }
                                        }}
                                        className={sign.inputText}
                                        _focus={{
                                            borderColor: 'var(--nextui-colors-secondary)'
                                        }}
                                        _hover={{
                                            borderColor: '#4C5155'
                                        }}
                                        borderColor={errorColor('six', formik)}
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
                                    <Tooltip
                                        content={'Reset the OTP value.'}
                                        contentColor='warning'
                                        placement='bottom'
                                    >
                                        <Button
                                            color='warning'
                                            flat
                                            onClick={() => {
                                                formik.resetForm();
                                                ref1?.current.focus();
                                            }}
                                        >
                                            Reset OTP
                                        </Button>
                                    </Tooltip>
                                </Grid>
                                <Grid>
                                    <Tooltip
                                        content={'Click to verify OTP.'}
                                        contentColor='success'
                                        placement='bottom'
                                    >
                                        <Button color='success' flat type='submit'>Verify OTP</Button>
                                    </Tooltip>
                                </Grid>
                                <Grid>
                                    <Tooltip
                                        content={'Send the OTP again.'}
                                        contentColor='secondary'
                                        placement='bottom'
                                    >
                                        <Button color='secondary' flat >Resend OTP</Button>
                                    </Tooltip>
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