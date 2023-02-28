import React from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
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
export default function Attendance() {
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

        <View style={[styles.card]}>
          <Text
            style={{
              color: '#202b35',
              margin: 20,
              paddingBottom: 10,
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'SofiaSansSemiCondensed-Bold',
            }}>
            Pending Request
          </Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {myTask.map(each => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '80%',
                    marginBottom: 20,
                    height: 49,
                    borderWidth: 1,
                    borderColor: each.color,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: '#212a35',
                      width: 120,
                      fontFamily: 'SofiaSansSemiCondensed-Bold',
                    }}>
                    {each.task}
                  </Text>
                  <Text style={{color: '#65737f'}}>{each.numberOf}</Text>
                  <Text
                    style={{
                      color: '#139f5a',
                      textDecorationLine: 'underline',
                      fontFamily: 'SofiaSansSemiCondensed-Bold',
                    }}>
                    View All
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
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
