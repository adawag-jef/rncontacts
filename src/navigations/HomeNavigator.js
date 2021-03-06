import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Setting from '../screens/Setting';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Setting} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
