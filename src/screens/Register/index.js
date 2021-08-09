import React, {useState} from 'react';
import RegisterComponent from '../../components/SignUp';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = ({name, value}) => {
    setForm({
      ...form,
      [name]: value,
    });

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => ({
            ...prev,
            [name]: 'This field needs minimun 6 characters',
          }));
        } else {
          setErrors(prev => ({
            ...prev,
            [name]: null,
          }));
        }
      } else {
        setErrors(prev => ({
          ...prev,
          [name]: null,
        }));
      }
    } else {
      setErrors(prev => ({
        ...prev,
        [name]: 'This field is required',
      }));
    }
  };
  const onSubmit = () => {
    // validations
    if (!form.userName) {
      setErrors(prev => ({
        ...prev,
        userName: 'Please add a username',
      }));
    }
    if (!form.firstName) {
      setErrors(prev => ({
        ...prev,
        firstName: 'Please add a First Name',
      }));
    }
    if (!form.lastName) {
      setErrors(prev => ({
        ...prev,
        lastName: 'Please add a Last Name',
      }));
    }
    if (!form.email) {
      setErrors(prev => ({
        ...prev,
        email: 'Please add a Email',
      }));
    }
    if (!form.password) {
      setErrors(prev => ({
        ...prev,
        password: 'Please add a Password',
      }));
    }
  };

  return (
    <RegisterComponent
      onChange={onChange}
      form={form}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
