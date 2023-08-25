import * as yup from 'yup';

export const followValidationSchema = yup.object().shape({
  follower_id: yup.string().nullable().required(),
  following_id: yup.string().nullable().required(),
});
