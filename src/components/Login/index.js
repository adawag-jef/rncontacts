import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import Input from '../common/Input';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
const Login = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcom to RNContacts</Text>
        <Text style={styles.subtitle}>Please login here</Text>
        <View style={styles.form}>
          <Input label="Username" placeholder="Enter Username" />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new Account</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
