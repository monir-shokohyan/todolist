import * as yup from 'yup'

import { VMessages } from './VMessage'

export const createSchema: yup.ObjectSchema<any> = yup.object().shape({
  name: yup
    .string()
    .required(VMessages.nameRequired)
    .min(5, VMessages.nameMinLength)
    .max(90, VMessages.nameMaxLength),
})
