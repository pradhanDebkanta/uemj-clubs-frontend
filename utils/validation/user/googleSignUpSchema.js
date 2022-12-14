import * as yup from 'yup';

export const googleSignUpSchema = yup.object().shape({
    tokenId: yup.string().required('Select a google account.'),
    enrollmentNo: yup.number().required('Enrollment no. is required.').integer('Enrollment no. must be integer')
        .positive('Enrollment no. must be positive').test('len', 'Enrollment no must be 14 digit.', value => {
            return String(value).length === 14;
        }),
    clubName: yup.array().of(yup.string()).required('Select club name.').nullable().min(1, 'Choose a club.')
})