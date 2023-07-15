// import Yup from "services/Yup";
// const registerValidationSchema = Yup.object().shape({
//     username: Yup.string().min(4).required(),
//     name: Yup.string().min(3).required(),
//     surname: Yup.string().min(3).required(),
//     email: Yup.string().email().required(),
//     phone: Yup.string().required(),
//     password: Yup.string()
//       .min(4)
//       .max(20)
//       .matches(
//         /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
//         "Şifre çok zayıf"
//       )
//       .required(),
//     confirm_password: Yup.string()
//       .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor.")
//       .required(),
//     term_of_use: Yup.boolean().oneOf(
//       [true],
//       "Kullanım koşullarını kabul etmelisiniz."
//     ),
//     privacy_policy: Yup.boolean().oneOf(
//       [true],
//       "Gizlilik politikasını kabul etmelisiniz."
//     ),
//   });