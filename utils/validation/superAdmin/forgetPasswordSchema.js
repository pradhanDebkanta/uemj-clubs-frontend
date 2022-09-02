import * as yup from 'yup';

export const forgetPasswordSchema = yup.object().shape({
    email: yup.string().email().required('Register email is required.')
});

export const resetPasswordSchema = yup.object().shape({
    email: yup.string().email().required('Register email is required.'),
    password: yup.string().required('Please enter password.')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password doesn't match").required('Please enter password again.'),

});

export const otpSchema = yup.object().shape({
    one: yup.number().required('required.').min(1).max(1).positive('OTP must be positive').integer('OTP must be integer'),
    two: yup.number().required('required.').min(1).max(1).positive('OTP must be positive').integer('OTP must be integer'),
    three: yup.number().required('required.').min(1).max(1).positive('OTP must be positive').integer('OTP must be integer'),
    four: yup.number().required('required.').min(1).max(1).positive('OTP must be positive').integer('OTP must be integer'),
    five: yup.number().required('required.').min(1).max(1).positive('OTP must be positive').integer('OTP must be integer'),
    six: yup.number().required('required.').min(1).max(1).positive('OTP must be positive').integer('OTP must be integer'),
});