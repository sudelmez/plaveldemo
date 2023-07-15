import {SafeAreaView } from 'react-native';
import { NativeBaseProvider} from 'native-base';
import RegisterPage from "./src/register/registerView.js";
export default function App() {
  return (<NativeBaseProvider>
    <SafeAreaView>
      <RegisterPage />
    </SafeAreaView>
  </NativeBaseProvider>
  );
}

