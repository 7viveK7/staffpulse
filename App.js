import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Home from './src/Components/Home';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Search from './src/Components/Search';
import Notification from './src/Components/Notification/Notification';
import mySpace from './src/Components/MySpace/mySpace';
import Login from './src/Components/Login';
import LoginScreen from './src/Components/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
            options={{title: 'VISFY Login'}}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
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
            name="Notification"
            component={Notification}
            visible={false}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MySpace"
            component={mySpace}
            visible={false}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default App;
