import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Home from './src/Components/Home/Home';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Search from './src/Components/Search';
import Notification from './src/Components/Notification/Notification';
import mySpace from './src/Components/Navigation/mySpace';
import Login from './src/Components/LoginScreen/Login';
import LoginScreen from './src/Components/LoginScreen/LoginScreen';
import HomeScreen from './src/Components/Navigation/HomeScreen';
import AnnouncementsCard from './src/Components/Announcements/Announcements';
import {LogBox} from 'react-native';
import ChartBoxScreen from './src/Components/ChartBox/ChartBox';
import {EmployeeProvider} from './src/Components/ContextApi/NewsContext';
import { Provider } from 'react-redux';
import store from './src/store/store';
//import VisfyContext from './src/Components/ContextApi/ContextApi';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
    <GestureHandlerRootView style={{flex: 1}}>
      <EmployeeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              visible={false}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="VISFY"
              component={Login}
              visible={false}
              options={{title: 'VISFY LOGIN'}}
              // options={{headerShown: false}}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              visible={false}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              visible={false}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AnnouncementsCard"
              component={AnnouncementsCard}
              options={{title: 'Announcements'}}
            />

            <Stack.Screen
              name="Notify"
              component={Notification}
              options={{title: 'Notify'}}
            />
            <Stack.Screen
              name="chatbox"
              component={ChartBoxScreen}
              options={{title: 'ChartBox'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EmployeeProvider>
    </GestureHandlerRootView>
    </Provider>
  );
};
export default App;
