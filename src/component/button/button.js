import {  Button } from 'native-base';
import React, { Component } from 'react'

// const CustomButton =({disabled}) => {
//     return(
//         <Button mt="2" color="success.400" disabled={disabled}>
//             Register Now!
//           </Button>
//     );
// }

class CustomButton2 extends Component {
    render() {
      const {disabled, type,onPress} = this.props;
      return(
        <Button mt="2" color="success.400" type={type} disabled={disabled} onPress={onPress}>
            Register Now!
          </Button>
    );
    }
  }

export default CustomButton2