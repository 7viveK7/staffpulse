import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {VStack, Box, HStack, Divider} from 'native-base';
import {
  Button,
  Modal,
  Stack,
  FormControl,
  Text,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {useState} from 'react';

export default AnnouncementCard = ({item, index, handleItemPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => handleItemPress(item)}>
        <Box style={{marginLeft: 10}} shadow={10}>
          <Center
            w="64"
            h="20"
            bg="#e6f5ee"
            rounded="md"
            shadow={3}
            style={{
              borderLeftColor: '#00ab55',

              padding: 10,
              borderLeftWidth: 3,
            }}>
            <VStack>
              <Text color="coolGray.800" bold numberOfLines={1}>
                {item.title}
              </Text>

              <Text color="coolGray.600" numberOfLines={1}>
                {item.description}
              </Text>
              <Text fontSize={10} color="coolGray.800" alignSelf={'flex-end'}>
                {item.publishedAt}
              </Text>
            </VStack>
          </Center>
        </Box>
      </Pressable>
      {index == 4 && (
        <Center
          w="20"
          h="20"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Pressable onPress={() => navigation.navigate('AnnouncementsCard')}> */}

          <Ionicons
            name="md-arrow-forward-circle-sharp"
            size={33}
            color="#00ab55"
          />

          {/* </Pressable> */}
        </Center>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
    borderWidth: 2,
    borderColor: '#00ab55',
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
  checkInCard: {
    width: '85%',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#e9f8ff',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
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
    width: 75,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  announcementsCardd: {
    backgroundColor: '#d9d9d9',
    height: 230,
    justifyContent: 'space-evenly',
    flex: 1,
    marginBottom: 10,
  },
  search: {
    width: '70%',
    height: 33,
    backgroundColor: '#ffffff',
    color: '#1a1b1b',
  },
  cardsHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  welcomeCard: {
    height: 250,
    flex: 1,
    backgroundColor: '#d9d9d9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 26,
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
});
