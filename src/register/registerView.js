import { View , Text} from 'react-native';
import { Center, Box, VStack } from 'native-base';
import Textfield2 from '/Users/sudeolmez/Desktop/plaveldemo/src/component/textfield/textfield.js';
import CustomButton2 from '/Users/sudeolmez/Desktop/plaveldemo/src/component/button/button.js';
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
                <RegisterText />
                <Formik
                    validationSchema={userSchema}
                    initialValues={{
                        email: "",
                        name: "",
                        number: "",
                        password: "",
                        term_of_use: false,
                        privacy_policy: false,
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } 
                        if (!values.name) {
                            errors.name = 'Required';
                        } 
                        if (!values.number) {
                            errors.number = 'Required';
                        } 
                        if (!values.password) {
                            errors.password = 'Required';
                        } 
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
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
                            <CustomButton2
                                onPress={handleSubmit}
                                disabled={isSubmitting}
                                type="submit"
                            />
                        </VStack>
                    )}
                </Formik>
            </Box>
        </Center>
    );
};

export default RegisterPage;
