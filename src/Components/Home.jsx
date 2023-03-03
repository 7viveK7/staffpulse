import React, {useState} from 'react';
import ScrollIndicator from 'react-native-custom-scroll-indicator';
import DropShadow from 'react-native-drop-shadow';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import {Avatar, Card, Badge, Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';
import {
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import NotificationItem from './Notification/NotificationItem';

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
  {key: 'Sap'},
  {key: 'Python'},
  {key: 'Ajax'},
  {key: 'C++'},
  {key: 'Ruby'},
  {key: 'Rails'},
  {key: '.Net'},
  {key: 'Perl'},
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
    name: 'Rashmi',
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
    name: 'Rashmi',
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
const AttendanceMl = ({open, openModal, title}) => {
  return (
    <>
      <Modal isOpen={open} onClose={() => openModal(false)} safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles['AttendanceModal']}>
          <Modal.CloseButton />
          <Modal.Header>{title}</Modal.Header>
          <Modal.Body>
            <NotificationItem />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

const Annoncements = ({item}) => {
  return (
    <View style={{marginLeft: 10}} id={item}>
      <Card.Title
        title="Employees expected to cloack"
        subtitle="1 hour ago"
        titleStyle={{fontSize: 16, fontWeight: '100'}}
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
  );
};
const Home = ({navigation}) => {
  const [pressedIcon, setPressedIcon] = useState('Home');

  const [open, setOpen] = useState(false);

  const openModal = opened => {
    setOpen(opened);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={false ? 'light-content' : 'dark-content'}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.headerPart}>
          <View style={styles.searchContainer}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={33}
              style={{position: 'absolute', left: -10, top: 0}}
              color="#00ab55"
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
            />
            <Searchbar
              placeholder="Search"
              style={styles.search}
              inputStyle={{
                padding: 0,
              }}
              onFocus={() => navigation.navigate('Search')}
            />
            <MaterialCommunityIcons
              name="chat"
              size={33}
              style={{marginLeft: 20}}
              color="#00ab55"
            />
          </View>
          <View style={styles.cardsHeading}>
            <Text
              style={{
                color: '#212a35',
                fontFamily: 'SofiaSansSemiCondensed-Bold',
              }}>
              Announcements
            </Text>
            <Pressable
              onPress={() => navigation.navigate('AnnouncementsCard', {DATA})}>
              <Text style={styles.viewAll}>View All </Text>
            </Pressable>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={DATA}
              initialNumToRender={true}
              renderItem={Annoncements}
              keyExtractor={item => <Annoncements key={item.id} />}
            />
          </View>
        </View>
        {/* welecome card */}
        <View style={styles.welcomeCard}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Rochester-Regular',
              color: '#f4bd94',
            }}>
            Welcome
          </Text>

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
              <Card
                style={{
                  width: 130,
                  height: 150,
                  margin: 10,
                  borderRadius: 12,
                  backgroundColor: '#fffae7',
                  borderWidth: 1,
                  borderColor: '#feeaad',
                }}>
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
                      source={require('../Images/3.jpeg')}
                      alt="not found"
                    />
                  </View>

                  <Text
                    variant="titleLarge"
                    style={{
                      color: '#caa846',
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
                  width: 130,
                  height: 150,
                  margin: 10,
                  borderRadius: 12,
                  backgroundColor: '#e9f8ff',
                  borderWidth: 1,
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
                      source={require('../Images/1.jpeg')}
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
                  width: 130,
                  height: 150,
                  margin: 10,
                  borderRadius: 12,
                  backgroundColor: '#ffeaef',
                  borderWidth: 1,
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
                      source={require('../Images/2.jpeg')}
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
        <View style={[styles.checkInCard]}>
          <MaterialCommunityIcons
            name="clock"
            size={37}
            style={{paddingLeft: 7}}
            color="#0089c8"
          />
          <View>
            <Text
              style={{
                color: '#2d3842',
                fontFamily: 'SofiaSansSemiCondensed',
                fontSize: 15,
              }}>
              03/01/22
            </Text>
            <Text
              style={{
                color: '#2d3842',
                fontFamily: 'SofiaSansSemiCondensed',
                fontSize: 14,
              }}>
              Clock In-hh:mm AM
            </Text>
            <Text
              style={{
                color: '#2d3842',
                fontFamily: 'SofiaSansSemiCondensed',
                fontSize: 14,
              }}>
              Clock Out-hh:mm PM{' '}
            </Text>
          </View>
          <Pressable
            style={styles.CheckInButton}
            onPress={() => console.warn('pressed')}>
            <Text>Clock In </Text>
          </Pressable>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={33}
            color="#637382"
          />
        </View>
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
                      source={require('../Images/1.jpeg')}
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
        <DropShadow style={styles.shadowProp}>
          <View style={[styles.card, {height: 200}]}>
            <Text
              style={{
                color: '#202b35',
                margin: 20,
                paddingBottom: 10,
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'SofiaSansSemiCondensed-Bold',
              }}>
              Quick Links
            </Text>
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
                    source={require('../Images/3.jpeg')}
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
                  <Pressable onPress={() => openModal(true)}>
                    <Text
                      style={{
                        color: '#139f5a',
                        textDecorationLine: 'underline',
                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                      }}>
                      View All
                    </Text>
                    <AttendanceMl
                      openModal={openModal}
                      open={open}
                      title={each.task}
                    />
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  megha: {
    width: 43,
    height: 43,
    borderRadius: 100,
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
  headerPart: {
    backgroundColor: '#d9d9d9',
    height: 230,
    justifyContent: 'space-evenly',
    flex: 1,
    marginBottom: 10,
  },
  search: {
    width: 250,
    height: 35,
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
    justifyContent: 'center',
    marginTop: 30,
  },
  viewAll: {
    color: '#139f5a',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
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
