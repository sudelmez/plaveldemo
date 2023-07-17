import { FormControl, Input } from 'native-base';
import { StyleSheet } from 'react-native';
import React, { Component } from 'react'
import PropTypes from 'prop-types'


// const CustomField = ({ hint, type, handleChange, value }) => {
//   return (
//     <FormControl>
//       <Input
//         onChangeText={handleChange(type)}
//         height={styles.inputfield.height}
//         borderRadius={styles.inputfield.borderRadius}
//         type={type}
//         placeholder={hint}
//         value={value}
//       />
//     </FormControl>
//   );
// };

const styles = StyleSheet.create({
  inputfield: {
    height: 12,
    borderRadius: 10,
  },
});

class Textfield2 extends Component {
  render() {
    const {hint, type, handleChange, value} = this.props;
    return (
      <FormControl>
      <Input
        onChangeText={handleChange(type)}
        height={styles.inputfield.height}
        borderRadius={styles.inputfield.borderRadius}
        type={type}
        placeholder={hint}
        value={value}
      />
    </FormControl>
    )
  }
}

Textfield2.PropTypes ={
  hint : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  handleChange : PropTypes.func.isRequired,
  value : PropTypes.string.isRequired,
}

Textfield2.defaultProps ={
  //default values for empty variables
}



export default Textfield2;
