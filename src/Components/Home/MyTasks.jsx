import {useEffect, useCallback, useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

import {Text, Box} from 'native-base';
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
    task: 'JobOffers',
    color: '#f4d3da',
    numberOf: 11,
  },
  {
    task: 'InterviewSchedule',
    color: '#fceec7',
    numberOf: 8,
  },
];
export default function MyTasks({setopenAttendance}) {
  return (
    <View style={[styles.card]}>
      <Text
        style={{
          color: '#202b35',
          margin: 20,
          paddingBottom: 10,
          fontSize: 20,
          ...styles.Mytasksubtitle,
        }}>
        My Tasks
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {myTask.map(each => {
          return (
            <View
              id={each.task}
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
              <Pressable onPress={() => setopenAttendance(each.task)}>
                <Text
                  style={{
                    color: '#139f5a',
                    textDecorationLine: 'underline',
                    fontFamily: 'SofiaSansSemiCondensed-Bold',
                  }}>
                  View All
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  welcomeCardTitle: {
    fontSize: 28,
    paddingTop: 10,
    fontFamily: 'SofiaSansSemiCondensed-Bold',
    color: '#334155',
  },
  title: {
    color: '#202b35',
    margin: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SofiaSansSemiCondensed-Bold',
  },
  megha: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  newUserName: {
    color: '#caa846',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  newUser: {
    width: 130,
    height: 150,
    margin: 10,
    borderRadius: 12,
    backgroundColor: '#fffae7',
    borderWidth: 1,
    borderColor: '#feeaad',
  },
  announcementCard: {
    backgroundColor: '#e0c8ae',
    width: 300,
    height: 76,
    borderRadius: 20,
    alignSelf: 'center',
    paddingRight: 7,
  },
  announcementCardIcon: {
    backgroundColor: '#fede68',
    width: 33,
    height: 33,
    borderRadius: 5,
  },
  celebrations: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  mySpace: {
    width: 26,
    height: 26,
    borderRadius: 100,
  },

  shadowProp: {
    shadowOffset: {width: 0, height: 0.5},
    shadowColor: '#c4c4c4',
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  clocktext: {
    color: '#2d3842',
    fontWeight: '900',
    fontFamily: 'SofiaSansSemiCondensed',
    fontSize: 12,
  },
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  AttendanceModal: {
    marginBottom: 0,
    marginTop: 'auto',
    width: '100%',
    height: '90%',
  },

  teamTableHead: {
    width: 65,
    height: 60,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    backgroundColor: '#e6f5ee',
  },
  subheading: {
    color: '#212a35',
    fontFamily: 'SofiaSansSemiCondensed-Bold',
    fontWeight: 'bold',
    fontSize: 18,
  },
  quickLinks: {
    width: '90%',
    height: 60,

    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
    marginBottom: 50,
  },
  imagecontainerEmployee: {
    alignSelf: 'center',
    backgroundColor: '#fee9a8',
    padding: 6,
    borderRadius: 50,
  },
  checkInCard: {
    width: '45%',
    elevation: 1,
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#e9f8ff',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',

    alignItems: 'center',
    padding: 10,
  },
  Mytasksubtitle: {
    fontFamily: 'SofiaSansSemiCondensed-Bold',
    fontWeight: 'bold',
  },
  celebrationCard: {
    width: '90%',
    height: 50,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
    marginBottom: 50,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  CheckInButton: {
    justifyContent: 'center',
    backgroundColor: '#0089c8',
    width: 60,
    height: 25,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  announcementsCardd: {
    backgroundColor: '#d9d9d9',
    height: 130,
    justifyContent: 'space-evenly',
    flex: 1,
    paddingBottom: 15,
    marginBottom: 10,
  },
  search: {
    width: '65%',
    height: 33,
    backgroundColor: '#ffffff',
    color: '#1a1b1b',
  },
  cardsHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginBottom: 15,
    marginRight: 10,
    marginTop: 10,
  },
  welcomeCard: {
    height: 250,
    flex: 1,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    justifyContent: 'space-evenly',
    paddingTop: 45,
    paddingBottom: 8,
  },
  viewAll: {
    color: '#139f5a',
    textDecorationLine: 'underline',
    fontWeight: '900',
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    margin: 10,
    borderRadius: 18,
  },
  myTaskemployee: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
});
