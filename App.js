import {SafeAreaView } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import RegisterPage from "./src/register/registerView.js";
import PasswordPage from "/Users/sudeolmez/Desktop/plaveldemo/src/forgotPassword/password.js";
export default function App() {
  return (<NativeBaseProvider>
    <SafeAreaView>
      <RegisterPage />
    </SafeAreaView>
  </NativeBaseProvider>
  );
}

