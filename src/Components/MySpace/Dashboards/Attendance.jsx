import React from 'react';
import {StyleSheet, ScrollView, View, Pressable} from 'react-native';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {
  Icon,
  useBreakpointValue,
  Text,
  VStack,
  Heading,
  Center,
  NativeBaseProvider,
} from 'native-base';

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
const MyAttendance = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <View
          style={{
            flexDirection: 'row',
          }}>
          <VStack
            m="3"
            id={'1WD'}
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.200"
            space={2}
            alignItems="center"
            justifyContent="center">
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}>
              Un approved leaves:2/30
            </Text>
          </VStack>
          <VStack
            id={'2WD'}
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.200"
            space={2}
            alignItems="center"
            justifyContent="center">
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}>
              Present :25/30
            </Text>
          </VStack>
          <VStack
            id={'3WD'}
            m="3"
            w="140"
            borderRadius="xl"
            p="3"
            bg="cyan.200"
            space={2}
            alignItems="center"
            justifyContent="center">
            <Text
              fontSize="lg"
              textAlign="center"
              _dark={{
                color: 'coolGray.800',
              }}>
              leaves :3/30
            </Text>
          </VStack>
        </View>
      </VStack>
    </ScrollView>
  );
};
export default function Attendance({route}) {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={[styles.AttendanceCard, styles.shadowProp]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black'}}>
              Yesterday, Thursday, feb 28 2019
            </Text>

            <EvilIcons
              name="calendar"
              size={33}
              color="grey"
              //   onPress={() => {
              //     navigation.dispatch(DrawerActions.openDrawer());
              //   }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',

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
        <Center flex={1} px="3">
          <MyAttendance />
        </Center>
      </View>
    </ScrollView>
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
  },
});
