import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
    email: string().email('Invalid email').required('Email is required'),
    name: string().required('Name is required'),
    number: number().required('Number is required'),
    password: string().required('Password is required'),
  });
// const user = await userSchema.validate(await fetchUser());

type User = InferType<typeof userSchema>;