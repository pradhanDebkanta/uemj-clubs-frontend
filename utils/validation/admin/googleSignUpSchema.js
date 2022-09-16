import * as yup from 'yup';

export const googleSignUpSchema = yup.object().shape({
    accountType: yup.string().required('Select account type.'),
    tokenId: yup.string().required('Select a google account.'),
    clubName: yup.string().required('Select club name.'),
    enrollmentNo: yup.number()
        .when("accountType", (acc) => {
            if (acc === 'co_ordinator') {
                return yup.number().required('Enrollment no. is required.').integer('Enrollment no. must be integer')
                    .positive('Enrollment no. must be positive').test('len', 'Enrollment no must be 14 digit.', value => {
                        return String(value).length === 14;
                    })
            }
        }),
})