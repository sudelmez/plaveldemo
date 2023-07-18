import { FormControl, Input } from 'native-base';
import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  inputfield: {
    height: 12,
    borderRadius: 10,
  },
});

class Textfield2 extends Component {
  render() {
    const { hint, type, handleChange, value, handleBlur } = this.props;
    return (
      <FormControl>
        <Input
          onChangeText={handleChange(type)}
          height={styles.inputfield.height}
          borderRadius={styles.inputfield.borderRadius}
          type={type}
          placeholder={hint}
          value={value}
          onBlur={handleBlur}
        />
      </FormControl>
    );
  }
}


Textfield2.propTypes = {
  hint: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default Textfield2;
