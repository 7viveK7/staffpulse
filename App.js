import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Home from './src/Components/Home';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Search from './src/Components/Search';
import Notification from './src/Components/Notification/Notification';
import mySpace from './src/Components/MySpace/mySpace';
import Login from './src/Components/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            visible={false}
            options={{headerShown: false}}
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
