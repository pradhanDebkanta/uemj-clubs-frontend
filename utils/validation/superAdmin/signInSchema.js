import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    email: yup.string().email().required('email is required.'),
    password: yup.string().required('Please enter password.')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
})