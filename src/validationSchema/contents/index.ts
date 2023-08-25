import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  price: yup.number().integer().required(),
  type: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
