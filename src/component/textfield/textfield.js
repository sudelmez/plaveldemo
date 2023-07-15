import { FormControl, Input } from 'native-base';
import { StyleSheet } from 'react-native';

const CustomField = ({ hint, type, handleChange }) => {
  return (
    <FormControl>
      <Input
        onChangeText={handleChange(type)}
        height={styles.inputfield.height}
        borderRadius={styles.inputfield.borderRadius}
        type={type}
        placeholder={hint}
      />
    </FormControl>
  );
};

const styles = StyleSheet.create({
  inputfield: {
    height: 12,
    borderRadius: 10
  }
});

export default CustomField;