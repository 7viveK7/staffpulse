import React from 'react';
import {StyleSheet, FlatList, ScrollView, View} from 'react-native';
import {
  Pressable,
  Text,
  Box,
  HStack,
  Spacer,
  Flex,
  Badge,
  Center,
  NativeBaseProvider,
} from 'native-base';

import {Avatar, Card, IconButton} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AnnouncementModal from '../Home/anouncements/AnnouncementModal';
import Announcementss from './Announcement';
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

export default function AnnouncementsCard({route}) {
  return (
    <View style={styles.Container}>
      <FlatList
        data={route.params.announcementData}
        initialNumToRender={true}
        renderItem={Announcementss}
        keyExtractor={item => <Announcementss key={item.publishedAt} />}
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
