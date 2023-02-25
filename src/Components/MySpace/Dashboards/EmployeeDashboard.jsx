import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {VStack, Box, Divider} from 'native-base';
import {Avatar, Card, IconButton} from 'react-native-paper';
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View styles={{borderColor: 'grey', borderWidth: 1}}>
        <Text styles={{color: 'red'}}>sterDay... 2/02/2023</Text>
      </View>
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

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text styles={{color: 'red'}}>loading...</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function EmployeeDashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 120},
        tabBarActiveTintColor: 'green',
        tabBarStyle: {backgroundColor: '#c0f1ca'},
      }}>
      <Tab.Screen name="Attendance" component={HomeScreen} />
      <Tab.Screen name="Payroll" component={SettingsScreen} />
      <Tab.Screen name="Tax" component={SettingsScreen} />
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
});
