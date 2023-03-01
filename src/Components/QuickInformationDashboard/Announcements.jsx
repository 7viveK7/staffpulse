import React from 'react';
import {Text, StyleSheet, FlatList, ScrollView, View} from 'react-native';
import {Avatar, Card, IconButton} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const myTask = [
  {
    task: 'Attendance',
    numberOf: 13,
    color: '#dbd4ec',
  },
  {
    task: 'Leave',
    numberOf: '7',
    color: '#cfe7f0',
  },
  {
    task: 'Job Offers',
    color: '#f4d3da',
    numberOf: 11,
  },
  {
    task: 'Interview Schedule',
    color: '#fceec7',
    numberOf: 8,
  },
];
function Announcementss({item}) {
  return (
    <View style={[styles.card]} id={item}>
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 30,
          borderStyle: 'solid',
          backgroundColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#00BCD4',
          transform: [{rotate: '-45deg'}],
          position: 'absolute',
          top: -6,
          left: -26,
        }}></View>
      <Text style={{color: 'red', marginBottom: 20}}>
        React Native Paper is a high-quality, standard-compliant Material Design
        library that has you covered in all major use-cases.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={{color: 'red'}}>24-Apr-2001</Text>
        <Text style={{color: 'red'}}>Image</Text>
        <Text style={{color: 'red'}}>Vikash Sharma</Text>
      </View>
    </View>
  );
}
export default function AnnouncementsCard({route}) {
  return (
    <View style={styles.Container}>
      <FlatList
        data={route.params.DATA}
        initialNumToRender={true}
        renderItem={Announcementss}
        keyExtractor={item => <Announcementss key={item.id} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
  },
  AttendanceCard: {
    width: '100%',
    borderColor: 'grey',
    borderWidth: 0.2,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
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
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: 'grey',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    marginTop: 6,
    borderRadius: 10,
    padding: 20,
  },
});
