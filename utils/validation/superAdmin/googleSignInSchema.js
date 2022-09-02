import * as yup from 'yup';

export const googleSignInSchema = yup.object().shape({
    tokenId: yup.string().required('Select a google account.')
})