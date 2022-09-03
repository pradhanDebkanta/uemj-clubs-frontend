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

    one: yup.number().required('required.').test('Is positive?',
        'ERROR: The number must be >=0',
        (value) => value >= 0)
        .integer('OTP must be integer').transform(value => {
            return isNaN(value) ? undefined : Number(value)
        }),

    two: yup.number().required('required.').test('Is positive?',
        'ERROR: The number must be >=0',
        (value) => value >= 0)
        .integer('OTP must be integer').transform(value => isNaN(value) ? undefined : Number(value)),

    three: yup.number().required('required.')
        .integer('OTP must be integer').transform(value => isNaN(value) ? undefined : Number(value)),

    four: yup.number().required('required.').test('Is positive?',
        'ERROR: The number must be >=0',
        (value) => value >= 0)
        .integer('OTP must be integer').transform(value => isNaN(value) ? undefined : Number(value)),

    five: yup.number().required('required.').test('Is positive?',
        'ERROR: The number must be >=0',
        (value) => value >= 0)
        .integer('OTP must be integer').transform(value => isNaN(value) ? undefined : Number(value)),

    six: yup.number().required('required.').test('Is positive?',
        'ERROR: The number must be >=0',
        (value) => value >= 0)
        .integer('OTP must be integer').transform(value => isNaN(value) ? undefined : Number(value)),
});