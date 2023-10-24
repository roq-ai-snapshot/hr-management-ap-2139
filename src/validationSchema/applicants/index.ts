import * as yup from 'yup';

export const applicantValidationSchema = yup.object().shape({
  status: yup.string().required(),
  resume: yup.string().required(),
  cover_letter: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
