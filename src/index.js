import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Form from './components/Form';
import Input from './components/Input';
import ErrorMessage from './components/ErrorMessage';

const validations = (function () {
  const number = string =>
    string.match(/^[0-9]+$/) ? null : new Error('Ingrese un número válido');

  const email = string => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(string) ? null : new Error('Ingrese un correo válido');
  }

    return {
      number,
      email
    }
})();

const validator = values => {
  return {
    cc: values.cc ? validations.number(values.cc) : new Error('Ingrese un número'),
    email: values.email ? validations.email(values.email) : new Error('Ingrese un email')
  };
};

const App = props => (
  <Form validator={validator}>
    <div>
      <div>
        <Input name="cc" />
        <ErrorMessage name="cc" />
      </div>
      <div>
        <Input name="email" />
        <ErrorMessage name="email" />
      </div>
      <button>Submit</button>
    </div>
  </Form>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
