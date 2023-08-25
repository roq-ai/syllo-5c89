import * as yup from 'yup';

export const shareValidationSchema = yup.object().shape({
  sharer_id: yup.string().nullable().required(),
  shared_id: yup.string().nullable().required(),
});
