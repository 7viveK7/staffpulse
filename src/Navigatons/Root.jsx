import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

import Home from '../Components/Home/Home';
import Search from '../Components/Search';
import Notification from '../Components/Notification/Notification';
import mySpace from '../Components/Navigation/mySpace';
import Login from '../Screens/LoginScreen/Login'
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import HomeScreen from '../Components/Navigation/HomeScreen';
import AnnouncementsCard from '../Components/Announcements/Announcements';
import ChartBoxScreen from '../Components/ChartBox/ChartBox';


const Stack = createNativeStackNavigator();

const Root = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    visible={false}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="VISFY"
                    component={Login}
                    visible={false}
                    options={{ title: 'VISFY LOGIN' }}
                // options={{headerShown: false}}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    visible={false}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    visible={false}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AnnouncementsCard"
                    component={AnnouncementsCard}
                    options={{ title: 'Announcements' }}
                />

                <Stack.Screen
                    name="Notify"
                    component={Notification}
                    options={{ title: 'Notify' }}
                />
                <Stack.Screen
                    name="chatbox"
                    component={ChartBoxScreen}
                    options={{ title: 'Chatbox ' }}
                />
            </Stack.Navigator>
        </NavigationContainer>


    );
};
export default Root;
