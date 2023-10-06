
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import NetInfo from '@react-native-community/netinfo';
import { EmployeeProvider } from './src/Components/ContextApi/NewsContext';
import Root from './src/Navigatons/Root';
import { setNetwork } from './src/store/Auth';
// import { setNetwork } from './store/Auth';
//import VisfyContext from './src/Components/ContextApi/ContextApi';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {

    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setNetwork(state.isConnected))

    });

    return () => {
      unsubscribe();
    };

  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <EmployeeProvider>
        <Root />
      </EmployeeProvider>
    </GestureHandlerRootView>);
};
export default App;
