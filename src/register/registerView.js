import { View } from 'react-native';
import { Center, Box, Heading, VStack } from 'native-base';
import CustomField from '/Users/sudeolmez/Desktop/plaveldemo/src/component/textfield/textfield.js';
import CustomButton from '/Users/sudeolmez/Desktop/plaveldemo/src/component/button/button.js';
import { Formik } from 'formik';
const RegisterPage = () => {
    return (
        <View>
            <Code />
        </View>
    );
}

Code = () => {
    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" py="20">
                <Heading size="lg" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    Register
                </Heading>
                <Formik
                    // validationSchema={registerValidationSchema}
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
                    onSubmit={(values, formikHelpers) => {
                        mutaion.mutate(values);
                    }}>{({
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        setFieldValue,
                    }) => (<VStack space={5} mt="5">
                        <CustomField hint="Enter your email" type="email" handleChange={handleChange} />
                        <CustomField hint="Enter your name and surname" type="name" handleChange={handleChange} />
                        <CustomField hint="Enter your phone" type="number" handleChange={handleChange} />
                        <CustomField hint="Enter your password" type="password" handleChange={handleChange} />
                        <CustomField hint="Enter your password again" type="password" handleChange={handleChange} />
                        <CustomButton />
                    </VStack>)}
                </Formik>

            </Box>
        </Center>);
};

export default RegisterPage
