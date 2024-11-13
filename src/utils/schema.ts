import {ConstNumber, errorTexts} from '@constants';

import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required(errorTexts.required),
  password: yup
    .string()
    .min(ConstNumber.VALUE_3, errorTexts.minimumPasswordLength)
    .required(errorTexts.required),
});
