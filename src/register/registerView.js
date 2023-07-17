import { View } from 'react-native';
import { Center, Box, VStack } from 'native-base';
import Textfield2 from '/Users/sudeolmez/Desktop/plaveldemo/src/component/textfield/textfield.js';
import CustomButton from '/Users/sudeolmez/Desktop/plaveldemo/src/component/button/button.js';
import { Formik } from 'formik';
import { userSchema } from "/Users/sudeolmez/Desktop/plaveldemo/src/services/Yup.ts"
import RegisterText from "/Users/sudeolmez/Desktop/plaveldemo/src/component/text/registertext.js"

const RegisterPage = () => {
    return (
        <View>
            <Code />
        </View>
    );
}

const Code = () => {
    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" py="20">
                <RegisterText/>
                <Formik
                    validationSchema={userSchema}
                    initialValues={{
                        username: "",
                        email: "",
                        name: "",
                        surname: "",
                        phone: "",
                        password: "",
                        confirm_password: "",
                        term_of_use: false,
                        privacy_policy: false,
                    }}
                    onSubmit={(values, { setSubmitting, setErrors }) => {
                        // Perform additional validation if needed
                        const errors = {};
                        if (!values.term_of_use || !values.privacy_policy) {
                            errors.terms = "Please accept the terms and privacy policy";
                        }
                        // Set the errors object if there are validation errors
                        if (Object.keys(errors).length > 0) {
                            setErrors(errors);
                        } else {
                            // No validation errors, proceed with form submission
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <VStack space={5} mt="5">
                            <Textfield2
                                hint="Enter your email"
                                type="email"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && (
                                <Text>{errors.email}</Text>
                            )}
                            <Textfield2
                                hint="Enter your name and surname"
                                type="name"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.name}
                            />{errors.name && touched.name && (
                                <Text>{errors.name}</Text>
                            )}
                            <Textfield2
                                hint="Enter your phone number"
                                type="number"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.number}
                            />{errors.number && touched.number && (
                                <Text>{errors.number}</Text>
                            )}
                            <Textfield2
                                hint="Enter your password"
                                type="password"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.password}
                            />{errors.password && touched.password && (
                                <Text>{errors.password}</Text>
                            )}
                            <Textfield2
                                hint="Enter your password again"
                                type="password"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && (
                                <Text>{errors.password}</Text>
                            )}
                            <CustomButton
                                disabled={isSubmitting}
                                onPress={handleSubmit} // Trigger form submission
                            />
                        </VStack>
                    )}
                </Formik>
            </Box>
        </Center>
    );
};

export default RegisterPage;
