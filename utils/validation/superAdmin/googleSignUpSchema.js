import * as yup from 'yup';

export const googleSignUpSchema = yup.object().shape({
    accountType: yup.string().required('Select account type.'),
    tokenId: yup.string().required('Select a google account.')
})