import { View} from 'react-native';
import { Center, Box, VStack} from 'native-base';
import CustomButton2 from '/Users/sudeolmez/Desktop/plaveldemo/src/component/button/button.js';
import { Formik } from 'formik';
import { userSchema } from "/Users/sudeolmez/Desktop/plaveldemo/src/services/Yup.ts"
import RegisterText from "/Users/sudeolmez/Desktop/plaveldemo/src/component/text/registertext.js"
import RegistrationFields from "/Users/sudeolmez/Desktop/plaveldemo/src/register/textfieldwidgets.js";
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { sendData } from '/Users/sudeolmez/Desktop/plaveldemo/src/services/api.js';
import { validate } from '../services/registervalidation';

const RegisterPage = () => {
    return (
        <View>
            <Code />
        </View>
    );
}

const Code = () => {

    const navigation = useNavigation();

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
                    validate={validate}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const response = await sendData(values);
                            console.log('Response:', response);
                            navigation.navigate('HomeScreen');
                        } catch (error) {
                            console.error('Error:', error);
                        } finally {
                            setSubmitting(false);
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
                            <RegistrationFields
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />
                            <CustomButton2
                                onPress={handleSubmit}
                                disabled={isSubmitting}
                                type="submit"
                                title= "Register Now!"
                            />
                        </VStack>
                    )}
                </Formik>
            </Box>
        </Center>
    );
};

export default RegisterPage;
