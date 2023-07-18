import * as yup from 'yup';

const registerValidationSchema = yup.object({
  name: yup.string().required('required'),
  email: yup.string().email('Please enter an email').required('required'),
  number: yup.string().required('required'), 
  password: yup.string().required('required'),
  passwordagain: yup.string().required('required'),
});
