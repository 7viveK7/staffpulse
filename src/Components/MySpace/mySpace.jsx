import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import Home from '../Home';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MySpace() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'green',
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Dashboard',
          headerShown: false,
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hh"
        component={NotificationsScreen}
        options={{
          title: 'Company Profile',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hm"
        component={NotificationsScreen}
        options={{
          title: 'My Profile',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hmsdfdga"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hdfxvsfgm"
        component={NotificationsScreen}
        options={{
          title: 'Directory',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hmgcxvxsd"
        component={NotificationsScreen}
        options={{
          title: 'Attendance',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hdfmgsd"
        component={NotificationsScreen}
        options={{
          title: 'Leave',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hmdddgsd"
        component={NotificationsScreen}
        options={{
          title: 'Payroll',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hmddfdgsd"
        component={NotificationsScreen}
        options={{
          title: 'Organization Chart',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hmOrganization Chartddfdgsd"
        component={NotificationsScreen}
        options={{
          title: 'Calender',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
