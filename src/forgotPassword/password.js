import { View} from 'react-native';
import { Center, VStack } from 'native-base';
import RegisterText from "/Users/sudeolmez/Desktop/plaveldemo/src/component/text/registertext.js"

const PasswordPage = () => {
    return (
        <View>
            <Code />
        </View>
    );
}

const Code = () => {
    return (
        <Center w="100%" top={20}>
            <VStack>
                <RegisterText text="Reset Password" />
                {/* <Textfield2  
                hint="Enter your new password"
                type="name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.name}/> */}
                </VStack>
        </Center>
    );
}

export default PasswordPage;
