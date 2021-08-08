import 'react-native-gesture-handler';
import React from 'react';
import AppContainer from './src/navigations';
import GlobalProvicer from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvicer>
      <AppContainer />
    </GlobalProvicer>
  );
};

export default App;
