import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {LOGIN} from '../../constants/routeNames';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';

const RegisterComponent = ({form, errors, onSubmit, onChange}) => {
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
        <Text style={styles.subtitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton primary title="Submit" onPress={onSubmit} />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an Account</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
