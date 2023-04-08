import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {VStack, Box, Divider} from 'native-base';
import {Avatar, Card, IconButton} from 'react-native-paper';
import Attendance from '../MySpace/NewAnnouncement';
import NewAnnouncement from '../MySpace/NewAnnouncement';
import EmployeeForm from '../MySpace/EmployeeForm';
import EmployeeDetails from '../MySpace/AllEmployees/AllEmployeesDetails';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'grey',
          margin: 6,
        }}>
        <Card.Title
          title="In Time"
          subtitle="10:00 AM"
          titleStyle={{
            fontSize: 16,
            color: 'black',
            fontWeight: '100',
            padding: 0,
            margin: 0,
          }}
          subtitleStyle={{color: 'grey'}}
          style={styles.announcementCard}
          left={props => (
            <Avatar.Icon
              {...props}
              style={styles.announcementCardIcon}
              icon="clock"
              color="#ef9c21"
            />
          )}
        />
        <Card.Title
          title="Out Time"
          subtitle="7:00 PM"
          titleStyle={{
            fontSize: 16,
            color: 'black',
            fontWeight: '100',
            padding: 0,
            margin: 0,
          }}
          subtitleStyle={{color: 'grey'}}
          style={styles.announcementCard}
          left={props => (
            <Avatar.Icon
              {...props}
              style={styles.announcementCardIcon}
              icon="clock"
              color="#ef9c21"
            />
          )}
        />
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function EmployeeDashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, fontWeight: '900'},
        tabBarActiveTintColor: 'green',
        tabBarStyle: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen name="New Announcement" component={NewAnnouncement} />
      <Tab.Screen name="New Employee" component={EmployeeForm} />
      <Tab.Screen name="Employees " component={EmployeeDetails} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  announcementCard: {
    flex: 1,

    borderRadius: 10,
    alignSelf: 'center',
    paddingRight: 4,
  },
  announcementCardIcon: {
    backgroundColor: '#fede68',
    width: 33,
    height: 33,
    borderRadius: 5,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 18,
  },
});
