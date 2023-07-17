import { object, string, number, InferType } from 'yup';
import * as Yup from 'yup';

let userSchema = object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    name: Yup.string().required('Name is required'),
    number: Yup.number().required('Number is required'),
    password: Yup.string().required('Password is required'),
  });
// const user = await userSchema.validate(await fetchUser());

type User = InferType<typeof userSchema>;