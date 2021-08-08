import React, {createContext, useReducer} from 'react';
import authReducer from './reducers/auth';
import contactsReducer from './reducers/contacts';
import authInitialState from './initialStates/auth';
import contactsInitialState from './initialStates/contacts';

export const GlobalContext = createContext({});

const GlobalProvicer = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [constactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        constactsState,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvicer;
