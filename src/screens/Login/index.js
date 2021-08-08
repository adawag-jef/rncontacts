import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
const Login = () => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <Input label="Username" onChangeText={onChangeText} value={value} />
      <Input
        secureTextEntry
        label="Password"
        onChangeText={onChangeText}
        value={value}
        iconPosition="right"
        icon={<Text>HIDE</Text>}
      />
      <CustomButton title="Submit" loading disabled />
      <CustomButton title="Submit" primary loading />
      <CustomButton title="Submit" danger />
      <CustomButton title="Submit" primary />
    </Container>
  );
};

export default Login;
