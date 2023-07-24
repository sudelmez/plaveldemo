import {  Button } from 'native-base';
import React, { Component } from 'react'

class CustomButton2 extends Component {
    render() {
      const {disabled, type,onPress,title} = this.props;
      return(
        <Button mt="2" color="success.400" type={type} disabled={disabled} onPress={onPress}>
            {title}
          </Button>
    );
    }
  }

export default CustomButton2