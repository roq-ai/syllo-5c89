import * as yup from 'yup';

export const businessValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  website: yup.string().nullable(),
  expertise: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
