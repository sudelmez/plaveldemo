export const validate = async (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    }
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.number) {
        errors.number = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.passwordagain) {
        errors.passwordagain = 'Required';
    }
    if (values.passwordagain != values.password) {
        errors.passwordagain = 'Passwords should be same';
    }
    return errors;
}