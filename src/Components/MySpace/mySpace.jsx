import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button, Image, View} from 'react-native';
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
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../Images/checkConnection.png')}
        style={{width: 300, height: 200}}
      />
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
            <MaterialCommunityIcons
              name="monitor-dashboard"
              size={18}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="hh"
        component={NotificationsScreen}
        options={{
          title: 'Company Profile',
          drawerIcon: ({focused, color, size}) => (
            <FontAwesome name="vimeo" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hm"
        component={NotificationsScreen}
        options={{
          title: 'My Profile',
          drawerIcon: ({focused, color, size}) => (
            <FontAwesome name="user" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="hdfxvsfgm"
        component={NotificationsScreen}
        options={{
          title: 'Directory',
          drawerIcon: ({focused, color, size}) => (
            <FontAwesome name="users" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MaterialCommunityIcons"
        component={NotificationsScreen}
        options={{
          title: 'Attendance',
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="passport-biometric"
              size={18}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="hdfmgsd"
        component={NotificationsScreen}
        options={{
          title: 'Leave',
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="bag-suitcase"
              size={18}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="hmdddgsd"
        component={NotificationsScreen}
        options={{
          title: 'Payroll',
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcons name="monetization-on" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hmddfdgsd"
        component={NotificationsScreen}
        options={{
          title: 'Organization Chart',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="git-network-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="hmOrganization Chartddfdgsd"
        component={NotificationsScreen}
        options={{
          title: 'Calender',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="md-calendar" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
