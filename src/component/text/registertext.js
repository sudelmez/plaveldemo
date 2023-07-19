import React from "react";
import { Text} from "react-native";
import {Heading } from 'native-base';

function RegisterText({ text }) {
    return (
      <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
        {text}
      </Heading>
    );
  }
  

export default RegisterText;
const RegisterText2 = () => {
    return (
        <Text>
            User App
        </Text>
    );
}

