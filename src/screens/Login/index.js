import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
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
    </Container>
  );
};

export default Login;
