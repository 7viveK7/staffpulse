import {useEffect, useState} from 'react';
import ScrollIndicator from 'react-native-custom-scroll-indicator';
import DropShadow from 'react-native-drop-shadow';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {VStack, Box, HStack, Divider} from 'native-base';
import {Avatar, Card, Badge, Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';
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
import NotificationItem from '../Notification/NotificationItem';
import AnnouncementCard from './anouncements/AnnouncementCard';
import AnnouncementModal from './anouncements/AnnouncementModal';
import Skeleton from '../Skeletons/Skeleton';

const DATA = [
  {key: 'Android'},
  {key: 'iOS'},
  {key: 'Java'},
  {key: 'Swift'},
  {key: 'Php'},
  {key: 'Hadoop'},
  {key: 'Sap'},
  {key: 'Python'},
  {key: 'Ajax'},
  {key: 'C++'},
  {key: 'Ruby'},
  {key: 'Rails'},
  {key: '.Net'},
  {key: 'Perl'},
  {key: '1ap2'},
  {key: 'thon2'},
];
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const teamMembers = [
  {
    color: '#dad0fa',
    name: 'Rashmi',
    posion: 'Trainee',
    state: 'Present',
  },
  {
    color: '#febeba',
    name: 'Manisha',
    posion: 'HR',
    state: 'Present',
  },
  {
    color: '#dad2fa',
    name: 'Abhishek',
    posion: 'Developer',
    state: 'Present',
  },
  {
    color: '##bff0c9',
    name: 'Neeraj',
    posion: 'HR',
    state: 'Absent',
  },
  {
    color: '#79927b',
    name: 'RaAshmi',
    posion: 'Trainee',
    state: 'Present',
  },
  {
    color: '#fed9a5',
    name: 'R',
    posion: 'Trainee',
    state: 'Present',
  },
  {
    color: '#fdb8b3',
    name: 'Rashmii',
    posion: 'Trainee',
    state: 'Present',
  },
];
const celebrations = [
  {
    profile: '1',
    name: 'Subham',
    color: '#c0f1ca',
    textColor: '#00931b',
    celebratetype: 'Birth Day',
  },
  {
    profile: '1',
    name: 'Yash',
    textColor: '#0280b8',
    color: '#c3ebfc',
    celebratetype: 'Marriage Aniversary',
  },
  {
    profile: '1',
    name: 'Ricku',
    textColor: '#1e076f',
    color: '#dad2fb',
    celebratetype: 'Work Aniversary',
  },
  {
    profile: '1',
    name: 'Priyank',
    textColor: '#a76203',
    color: '#ffdaa6',
    celebratetype: "kid's Birthday",
  },
];
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

const AttendanceMl = ({openAttendance, setopenAttendance}) => {
  return (
    <>
      <Modal
        isOpen={openAttendance ? true : false}
        onClose={() => setopenAttendance(false)}
        safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles['AttendanceModal']}>
          <Modal.CloseButton />
          <Modal.Header>{openAttendance}</Modal.Header>
          <Modal.Body>
            <NotificationItem />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

const Home = ({navigation}) => {
  const [pressedIcon, setPressedIcon] = useState('Home');
  const [showModal, setShowModal] = useState(false);
  const [openAttendance, setopenAttendance] = useState(false);
  const [announcementData, setAnnouncementData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = item => {
    setSelectedItem(item);
    setShowModal(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=bitcoin&apiKey=6016a5388f634b0ab29204bdbcb7b8b2',
        );

        const data = await response.json();
        setAnnouncementData(data?.articles);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.searchContainer}>
        <Pressable
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Image
            style={{
              height: 35,
              width: 35,
              elevation: 1,
              borderRadius: 100,
            }}
            source={require('../../Images/3.jpeg')}
            alt="not found"
          />
        </Pressable>

        <Searchbar
          placeholder="Search"
          style={styles.search}
          inputStyle={{
            padding: 0,
          }}
          onFocus={() => navigation.navigate('Search', {announcementData})}
        />

        <Box style={{position: 'relative'}}>
          <Badge
            colorScheme="danger"
            rounded="full"
            style={{position: 'absolute', top: -6, zIndex: 999, right: -4}}
            _text={{
              fontSize: 7,
            }}>
            2
          </Badge>
          <MaterialCommunityIcons
            name="chat"
            size={33}
            color="#00ab55"
            onPress={() => {
              navigation.navigate('chatbox');
            }}
          />
        </Box>
      </View>
      <FlatList
        data={[1]}
        renderItem={props => (
          <View>
            <View style={styles.announcementsCardd}>
              <View style={styles.cardsHeading}>
                <Text
                  style={{
                    color: '#212a35',
                    fontSize: 18,

                    fontFamily: 'SofiaSansSemiCondensed-Bold',
                  }}>
                  Announcements
                </Text>
                <Pressable
                  onPress={() =>
                    navigation.navigate('AnnouncementsCard', {announcementData})
                  }>
                  <Text style={styles.viewAll}>View All </Text>
                </Pressable>
              </View>
              <View>
                <FlatList
                  horizontal={true}
                  data={announcementData?.slice(0, 10)}
                  initialNumToRender={true}
                  keyExtractor={item => item.title}
                  renderItem={({item, index}) => (
                    <AnnouncementCard
                      handleItemPress={handleItemPress}
                      item={item}
                      index={index}
                    />
                  )}
                />
                {showModal && (
                  <AnnouncemengtModal
                    selectedItem={selectedItem}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                )}
                {!announcementData && <Skeleton />}
              </View>
            </View>
            {/* welecome card */}
            <View style={styles.welcomeCard}>
              <Text style={styles.welcomeCardTitle}>Welcome</Text>

              <ScrollIndicator
                horizontal={true}
                indicatorStyle={{
                  height: 8,
                  width: 40,
                  backgroundColor: '#00ab55',
                  borderRadius: 5,
                }}
                scrollViewBoxStyle={{
                  width: '100%',
                }}
                indicatorBackgroundStyle={{
                  height: 8,
                  width: 120,
                  borderRadius: 5,
                  backgroundColor: '#add0bf',
                }}
                viewBoxStyle={{
                  alignItems: 'center',

                  // marginTop: 60
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Card style={styles.newUser}>
                    <Card.Content>
                      <View
                        style={{
                          alignSelf: 'center',
                          backgroundColor: '#fee9a8',
                          padding: 10,
                          borderRadius: 50,
                        }}>
                        <Image
                          style={styles.megha}
                          source={require('../../Images/3.jpeg')}
                          alt="not found"
                        />
                      </View>

                      <Text variant="titleLarge" style={styles.newUserName}>
                        Megha
                      </Text>
                      <Text
                        variant="bodyMedium"
                        style={{
                          color: '#657582',
                          alignSelf: 'center',
                          textAlign: 'center',
                        }}>
                        Ux Designer Join today
                      </Text>
                    </Card.Content>
                  </Card>
                  <Card
                    style={{
                      ...styles.newUser,
                      backgroundColor: '#e9f8ff',

                      borderColor: '#b8e7f9',
                    }}>
                    <Card.Content>
                      <View
                        style={{
                          alignSelf: 'center',
                          backgroundColor: '#c2e9fc',
                          padding: 10,
                          borderRadius: 50,
                        }}>
                        <Image
                          style={styles.megha}
                          source={require('../../Images/1.jpeg')}
                          alt="error"
                        />
                      </View>
                      <Text
                        variant="titleLarge"
                        style={{
                          color: '#095c85',
                          alignSelf: 'center',
                          fontWeight: 'bold',
                          fontSize: 20,
                        }}>
                        Megha
                      </Text>
                      <Text
                        variant="bodyMedium"
                        style={{
                          color: '#657582',
                          alignSelf: 'center',
                          textAlign: 'center',
                        }}>
                        Ux Designer Join today
                      </Text>
                    </Card.Content>
                  </Card>
                  <Card
                    style={{
                      ...styles.newUser,
                      backgroundColor: '#ffeaef',
                      borderColor: '#fecad6',
                    }}>
                    <Card.Content>
                      <View
                        style={{
                          alignSelf: 'center',
                          backgroundColor: '#fecad6',
                          padding: 10,
                          borderRadius: 50,
                        }}>
                        <Image
                          style={styles.megha}
                          source={require('../../Images/2.jpeg')}
                          alt="loading.."
                        />
                      </View>
                      <Text
                        variant="titleLarge"
                        style={{
                          color: '#cc4964',
                          alignSelf: 'center',
                          fontWeight: 'bold',
                          fontSize: 20,
                        }}>
                        Megha
                      </Text>
                      <Text
                        variant="bodyMedium"
                        style={{
                          color: '#657582',
                          alignSelf: 'center',
                          textAlign: 'center',
                        }}>
                        Ux Designer Join today
                      </Text>
                    </Card.Content>
                  </Card>
                </View>
              </ScrollIndicator>
            </View>
            {/* CheckIn card */}
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
              }}>
              <View style={[styles.checkInCard]}>
                <MaterialCommunityIcons
                  name="clock"
                  size={33}
                  style={{paddingLeft: 7, paddingRight: 10}}
                  color="#0089c8"
                />
                <View>
                  <Text
                    style={{
                      color: '#2d3842',
                      fontWeight: '900',
                      fontFamily: 'SofiaSansSemiCondensed',
                      fontSize: 12,
                    }}>
                    CLOCK IN
                  </Text>
                  <Text
                    style={{
                      color: '#2d3842',
                      fontWeight: '900',
                      fontFamily: 'SofiaSansSemiCondensed',
                      fontSize: 12,
                    }}>
                    10:00 AM
                  </Text>
                </View>
                {/* <Pressable
                style={styles.CheckInButton}
                onPress={() => console.warn('pressed')}>
                <Text>Clock In </Text>
              </Pressable> */}
              </View>
              <View style={[styles.checkInCard]}>
                <MaterialCommunityIcons
                  name="clock"
                  size={33}
                  style={{paddingLeft: 7, paddingRight: 10}}
                  color="#0089c8"
                />
                <View>
                  <Text
                    style={{
                      color: '#2d3842',
                      fontWeight: '900',
                      fontFamily: 'SofiaSansSemiCondensed',
                      fontSize: 12,
                    }}>
                    CLOCK OUT
                  </Text>
                  <Text
                    style={{
                      color: '#2d3842',
                      fontWeight: '900',
                      fontFamily: 'SofiaSansSemiCondensed',
                      fontSize: 12,
                    }}>
                    6:30 PM
                  </Text>
                </View>
                {/* <Pressable
                style={styles.CheckInButton}
                onPress={() => console.warn('pressed')}>
                <Text>Clock In </Text>
              </Pressable> */}
              </View>
            </View>
            {/* my team */}
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 20,
                }}>
                <Text
                  style={{
                    color: '#212a35',
                    fontFamily: 'SofiaSansSemiCondensed-Bold',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  My Team
                </Text>
                <Text style={styles.viewAll}>View All </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',

                  marginBottom: 7,
                }}>
                <View style={styles.teamTableHead}>
                  <Text
                    style={{
                      color: '#00ab55',
                      fontFamily: 'SofiaSansSemiCondensed-Bold',
                      fontWeight: 'bold',
                    }}>
                    Profile
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.teamTableHead,
                    borderWidth: 0,
                    backgroundColor: '#f9e7e7',
                  }}>
                  <Text
                    style={{
                      color: '#b40614',
                      fontFamily: 'SofiaSansSemiCondensed-Bold',
                      fontWeight: 'bold',
                    }}>
                    Name
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.teamTableHead,
                    borderWidth: 0,
                    backgroundColor: '#feeaf1',
                  }}>
                  <Text
                    style={{
                      color: '#f33f7e',
                      fontFamily: 'SofiaSansSemiCondensed-Bold',
                      fontWeight: 'bold',
                    }}>
                    Dis
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.teamTableHead,
                    borderWidth: 0,
                    backgroundColor: '#e7f0f5',
                  }}>
                  <Text
                    style={{
                      color: '#096993',
                      fontFamily: 'SofiaSansSemiCondensed-Bold',
                      fontWeight: 'bold',
                    }}>
                    Status
                  </Text>
                </View>
              </View>

              {teamMembers.map(member => {
                return (
                  <View
                    id={member.name}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      width: '100%',
                      marginBottom: 10,
                    }}>
                    <View style={{width: 65}}>
                      <View
                        style={{
                          alignSelf: 'center',
                          backgroundColor: '#fee9a8',
                          padding: 6,
                          borderRadius: 50,
                        }}>
                        <Image
                          style={styles.megha}
                          source={require('../../Images/1.jpeg')}
                        />
                      </View>
                    </View>
                    <Text
                      style={{
                        color: '#212a35',
                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                        fontSize: 16,
                        width: 65,
                      }}>
                      {member.name}
                    </Text>
                    <Text style={{color: '#727d89', width: 65}}>
                      {member.posion}
                    </Text>
                    <View style={{flexDirection: 'row', width: 68}}>
                      <Badge
                        style={{
                          marginBottom: 'auto',
                          marginTop: 'auto',
                          marginRight: 6,
                          backgroundColor: '#36a970',
                        }}
                        size={16}></Badge>
                      <Text style={{color: '#727d89'}}>{member.state}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            {/* quick links */}
            <DropShadow style={styles.shadowProp}>
              <View style={[styles.card, {height: 200}]}>
                <Text style={styles.title}>Quick Links</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      width: 100,
                      height: 70,
                      backgroundColor: '#def5fa',
                      padding: 6,

                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#212a35',
                        alignSelf: 'center',
                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                        fontSize: 17,
                      }}>
                      Holiday Calender
                    </Text>
                    <MaterialCommunityIcons
                      name="arrow-top-right"
                      size={23}
                      color="#0089c8"
                    />
                  </View>
                  <View
                    style={{
                      width: 100,
                      height: 70,
                      backgroundColor: '#def5fa',
                      padding: 6,
                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: '#212a35',
                        alignSelf: 'center',
                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                        fontSize: 17,
                      }}>
                      Leave Polacy
                    </Text>
                    <MaterialCommunityIcons
                      name="arrow-top-right"
                      size={23}
                      color="#0089c8"
                    />
                  </View>
                  <View
                    style={{
                      width: 100,
                      height: 70,
                      backgroundColor: '#def5fa',

                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 6,
                    }}>
                    <Text
                      style={{
                        color: '#212a35',
                        alignSelf: 'center',
                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                        fontSize: 17,
                      }}>
                      Payroll Manual
                    </Text>
                    <MaterialCommunityIcons
                      name="arrow-top-right"
                      size={23}
                      color="#0089c8"
                    />
                  </View>
                </View>
              </View>
            </DropShadow>
            {/* celebrations */}
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
                Celebrations
              </Text>
              {celebrations.map(celebrate => {
                return (
                  <View
                    id={celebrate.celebratetype}
                    style={[
                      styles.celebrationCard,
                      {backgroundColor: celebrate.color},
                    ]}>
                    <Text
                      style={{
                        color: '#1e2c38',
                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                        width: 80,
                        fontWeight: 'bold',
                      }}>
                      {celebrate.celebratetype}
                    </Text>

                    <View
                      style={{
                        alignSelf: 'center',
                        backgroundColor: celebrate.color,
                        padding: 10,
                        borderRadius: 50,
                      }}>
                      <Image
                        style={styles.celebrations}
                        source={require('../../Images/3.jpeg')}
                      />
                    </View>

                    <Text
                      style={{
                        color: celebrate.textColor,
                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                      }}>
                      {celebrate.name}
                    </Text>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={22}
                      color="#637382"
                    />
                  </View>
                );
              })}
            </View>
            {/* myTasks */}
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
          </View>
        )}
      />
      <AttendanceMl
        setopenAttendance={setopenAttendance}
        openAttendance={openAttendance}
      />
    </SafeAreaView>
  );
};

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
});

export default Home;
