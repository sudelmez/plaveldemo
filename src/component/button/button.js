import {  Button } from 'native-base';

const CustomButton =({disabled}) => {
    return(
        <Button mt="2" color="success.400" disabled={disabled}>
            Register Now!
          </Button>
    );
}

export default CustomButton