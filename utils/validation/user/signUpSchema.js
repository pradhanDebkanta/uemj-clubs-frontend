import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    name: yup.string().max(35, 'name should be max 35 characters.')
        .min(6, 'name should be min 6 character').required('name is required.')
        .test('is-full-name', 'Please enter both your first and last name', value => {
            const nameArr = value?.split(" ");
            return nameArr?.indexOf('') === -1 && nameArr?.length >= 2 && nameArr?.length <= 3
        }),
    email: yup.string().email().required('email is required.'),
    enrollmentNo: yup.number().required('Enrollment no. is required.').integer('Enrollment no. must be integer')
        .positive('Enrollment no. must be positive').test('len', 'Enrollment no must be 14 digit.', value => {
            return String(value).length === 14;
        }),
    password: yup.string().required('Please enter password.')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password doesn't match").required('Please enter password again.'),
    clubName: yup.array().of(yup.string().required('Select club name.')).required('Select club name.')
})