import React from 'react';
import { Text } from 'react-native';
import Textfield2 from '/Users/sudeolmez/Desktop/plaveldemo/src/component/textfield/textfield.js'; // Customize the import path for Textfield2
import { VStack } from 'native-base';

const RegistrationFields = ({ values, errors, touched, handleChange, handleBlur }) => {
    return (
        <VStack space={5} mt="5">
            <Textfield2
                hint="Enter your email"
                type="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
            <Textfield2
                hint="Enter your name and surname"
                type="name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}
            />
            {errors.name && touched.name && <Text>{errors.name}</Text>}
            <Textfield2
                hint="Enter your phone number"
                type="number"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.number}
            />
            {errors.number && touched.number && <Text>{errors.number}</Text>}
            <Textfield2
                hint="Enter your password"
                type="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && <Text>{errors.password}</Text>}
            <Textfield2
                hint="Enter your password again"
                type="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && <Text>{errors.password}</Text>}
        </VStack>
    );
};

export default RegistrationFields;
