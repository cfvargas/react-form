import validations from './validations';

export default values => {
  console.log(values);
  return {
    cc: values.cc ? validations.number(values.cc) : new Error('Ingrese un número'),
    email: values.email ? validations.email(values.email) : new Error('Ingrese un email')
  };
};
