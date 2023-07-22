import { View, Text, TouchableOpacity } from 'react-native';
import { Center, Box, VStack, HStack } from 'native-base';
import CustomButton2 from '/Users/sudeolmez/Desktop/plaveldemo/src/component/button/button.js';
import { Formik } from 'formik';
import { userSchema } from "/Users/sudeolmez/Desktop/plaveldemo/src/services/Yup.ts"
import RegisterText from "/Users/sudeolmez/Desktop/plaveldemo/src/component/text/registertext.js"
import RegistrationFields from "/Users/sudeolmez/Desktop/plaveldemo/src/register/textfieldwidgets.js";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const RegisterPage = () => {
    return (
        <View>
            <Code />
        </View>
    );
}

const Code = () => {

    const [responseData, setResponseData] = useState(null);
    const navigation = useNavigation();

    const sendData = async (values) => {
        try {
            const dataToSend = {
                email: values.email,
                name: values.name,
                number: values.number,
                password: values.password,
                passwordagain: values.passwordagain,
                userId: 1,
            };

            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                dataToSend
            );

            setResponseData(response.data);
            console.log('Response:', response.data);
            navigation.navigate('HomeScreen');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" py="20">
                <RegisterText text="Register" />
                <Formik
                    validationSchema={userSchema}
                    initialValues={{
                        email: "",
                        name: "",
                        number: "",
                        password: "",
                        passwordagain: "",
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
                        if (!values.passwordagain) {
                            errors.passwordagain = 'Required';
                        }
                        if (values.passwordagain!=values.password) {
                            errors.passwordagain = 'Passwords should be same';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        sendData(values); // Call sendData function to send the data
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
                            <RegistrationFields
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            {/* <HStack justifyContent="space-between" alignItems="center"> */}
                            <CustomButton2
                                onPress={handleSubmit}
                                disabled={isSubmitting}
                                type="submit"
                            />
                            {/* <TouchableOpacity>
                                    <Text style={{ textDecorationLine: 'underline' }}>Forgot Password</Text>
                                </TouchableOpacity> */}
                            {/* </HStack> */}
                        </VStack>
                    )}
                </Formik>
            </Box>
        </Center>
    );
};

export default RegisterPage;
