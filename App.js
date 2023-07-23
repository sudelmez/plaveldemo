import { NativeBaseProvider } from 'native-base';
import RegisterPage from "./src/register/registerView.js";
import HomeScreen from "/Users/sudeolmez/Desktop/plaveldemo/src/homepage/homeview.js";
import PasswordPage from "/Users/sudeolmez/Desktop/plaveldemo/src/forgotPassword/password.js";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (<NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterPage">
        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Change Password" component={PasswordPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
  );
}

