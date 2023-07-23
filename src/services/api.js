import axios from 'axios';


export const sendData = async (values) => {
    try {
        const dataToSend = {
            email: values.email,
            name: values.name,
            number: values.number,
            password: values.password,
            passwordagain: values.passwordagain,
            userId: 1,
        };

        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            dataToSend
        );

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
