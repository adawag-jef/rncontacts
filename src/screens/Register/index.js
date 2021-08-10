import React, {useState, useContext, useEffect, useCallback} from 'react';
import {GlobalContext} from '../../context/Provider';
import RegisterComponent from '../../components/SignUp';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

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

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
      disabled={loading}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
