import { View } from 'react-native';
import { Center, Box, VStack } from 'native-base';
import CustomButton2 from '../component/button/button';
import { useNavigation } from '@react-navigation/native';

const AuthView = () => {
    const navigation = useNavigation();
    return (
      <View>
        <Code navigation={navigation} />
      </View>
    );
  };
  

  const Code = ({ navigation }) => {
    return (
      <Center w="100%">
        <Box safeArea p="2" w="90%" py="20">
          <VStack space={4}>
            <CustomButton2
              onPress={() => navigation.navigate('RegisterPage')}
              disabled={false}
              type="register"
              title="Register"
            />
            <CustomButton2
              onPress={() => navigation.navigate('HomeScreen')}
              disabled={false}
              type="login"
              title="Log In"
            />
          </VStack>
        </Box>
      </Center>
    );
  };
  


export default AuthView;

