import React from 'react';
import ScrollIndicator from "react-native-custom-scroll-indicator";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Avatar,
  Card,
  IconButton,
  Button,
  Badge,
  Searchbar,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


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
const celebrations=[
  {
    profile:'',
    name:'',
    color: '#dad0fa',
    celebratetype:''
  }, {
    profile:'',
    name:'',
    color: '#fdb8b3',
    celebratetype:''
  }
  ,
  {
    profile:'',
    name:'',
    color: '#79927b',
    celebratetype:''
  }
  ,
  {
    profile:'',
    name:'',
    color: '##bff0c9',
    celebratetype:''
  }
]
const myTask=[
  {
    task:'',
    numberOf:13,
    color: '##bff0c9',
  },
  {
    task:'',
    numberOf:'',
    color: '#dad0fa',
  },
  {
    task:'',
    color: '#79927b',
    numberOf:1
  },
  {
    task:'',
    numberOf:12,
    color: '#dad0fa',
  },
]
const MyTeam = [1, 2, 3, 4];
const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={false ? 'light-content' : 'dark-content'}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.headerPart}>
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search"
              style={styles.search}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <MaterialCommunityIcons
              name="chat"
              size={33}
              style={{marginLeft: 20}}
              color="#00ab55"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text style={{color: '#212a35',fontFamily:'MoonDance-Regular.tff'}}>Announcements fd</Text>
            <Text style={{color: '#139f5a', textDecorationLine: 'underline'}}>
              View All{' '}
            </Text>
          </View>
          <View>
          <ScrollView horizontal={true} >
 <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 10}}>
              <Card.Title
                title="Employees expected to cloack"
                subtitle="1 hour ago"
                titleStyle={{fontSize: 16}}
                style={{
                  backgroundColor: '#e0c8ae',
                  width:300,
                  height: 58,
                  borderRadius: 20,
                  alignSelf: 'center',
                  paddingRight: 5,
                }}
                left={props => (
                  <Avatar.Icon
                    {...props}
                    style={{backgroundColor: '#fede68'}}
                    icon="clock"
                    color="#ef9c21"
                  />
                )}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Card.Title
                title="Employees expected to cloack"
                subtitle="1 hour ago"
                titleStyle={{fontSize: 16}}
                style={{
                  backgroundColor: '#e0c8ae',
                  width:300,
                  height: 58,
                  borderRadius: 20,
                  alignSelf: 'center',
                  paddingRight: 5,
                }}
                left={props => (
                  <Avatar.Icon
                    {...props}
                    style={{backgroundColor: '#fede68'}}
                    icon="clock"
                    color="#ef9c21"
                  />
                )}
              />
            </View>
            
            <View>
              <Card.Title
                title="Card Title"
                subtitle="1 hour ago"
                style={{
                  backgroundColor: '#e0c8ae',
                  width: '60%',
                  height: 60,
                  borderRadius: 20,
                  alignSelf: 'center',
                }}
                left={props => (
                  <Avatar.Icon
                    {...props}
                    style={{backgroundColor: '#fede68'}}
                    icon="clock"
                    color="#ef9c21"
                  />
                )}
              />
            </View>
          </View>
 </ScrollView>
          </View>
 
         
        </View>

        <View style={styles.bottom}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'MoonDance-Regular',
              color: '#f4bd94',
              fontWeight: 'bold',
              marginTop:15
            }}>
            WELCOME
          </Text>
        
          <ScrollIndicator horizontal={true} indicatorStyle={{
        height: 2,
        width: 40,
        borderRadius: 4
    }}
    scrollViewBoxStyle={{
       
        width: '100%',
       
    }}
    viewBoxStyle={{
      alignItems: "center",
      // marginTop: 60
  }} >
            <View  style={{flexDirection:'row'}}>

           
          <Card
            style={{
              width: 130,
              height: 150,
              margin:10,
              borderRadius: 12,
              backgroundColor: '#e9f8ff',
              borderWidth: 1,
              borderColor: '#b8e7f9',
            }}>
            <Card.Content>
              <Badge
                style={{alignSelf: 'center', backgroundColor: '#c2e9fc'}}
                size={63}>
                v
              </Badge>

              <Text
                variant="titleLarge"
                style={{
                  color: '#4495bb',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Megha
              </Text>
              <Text
                variant="bodyMedium"
                style={{color: '#657582', alignSelf: 'center'}}>
                Ux Designer Join today
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              width: 130,
              height: 150,
              margin:10,
              borderRadius: 12,
              backgroundColor: '#e9f8ff',
              borderWidth: 1,
              borderColor: '#b8e7f9',
            }}>
            <Card.Content>
              <Badge
                style={{alignSelf: 'center', backgroundColor: '#c2e9fc'}}
                size={63}>
                v
              </Badge>

              <Text
                variant="titleLarge"
                style={{
                  color: '#4495bb',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Megha
              </Text>
              <Text
                variant="bodyMedium"
                style={{color: '#657582', alignSelf: 'center'}}>
                Ux Designer Join today
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              width: 130,
              height: 150,
              margin:10,
              borderRadius: 12,
              backgroundColor: '#e9f8ff',
              borderWidth: 1,
              borderColor: '#b8e7f9',
            }}>
            <Card.Content>
              <Badge
                style={{alignSelf: 'center', backgroundColor: '#c2e9fc'}}
                size={63}>
                v
              </Badge>

              <Text
                variant="titleLarge"
                style={{
                  color: '#4495bb',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Megha
              </Text>
              <Text
                variant="bodyMedium"
                style={{color: '#657582', alignSelf: 'center'}}>
                Ux Designer Join today
              </Text>
            </Card.Content>
          </Card>
          </View>
          </ScrollIndicator>
        
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            width: '85%',
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: '#e9f8ff',
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <Card.Title
            title="03/01/2023"
            subtitle="Clock in-hh:mm AM  Clock Out-hh:mm PM "
            left={props => (
              <MaterialCommunityIcons name="clock" size={33} color="#0089c8" />
            )}
            right={props => (
              <Button
                mode="contained"
                style={{
                  backgroundColor: '#0089c8',
                  borderRadius: 10,
                  marginRight: 10,
                }}
                onPress={() => console.log('Pressed')}>
                Check in
              </Button>
            )}
          />
        </View>
        <View style={styles.MyTeam}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            <Text style={{color: '#212a35'}}>My Team</Text>
            <Text style={{color: '#139f5a', textDecorationLine: 'underline'}}>
              View All{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 4,
              marginBottom: 7,
            }}>
            <View
              style={{
                width: 65,
                height: 60,
                backgroundColor: 'gray',

                borderRadius: 9,
                backgroundColor: '#e6f5ee',
                borderWidth: 2,
                borderColor: '#00ab55',
              }}></View>
            <View
              style={{
                width: 65,
                height: 60,
                backgroundColor: 'gray',
                borderRadius: 9,
                backgroundColor: '#f9e7e7',
              }}></View>
            <View
              style={{
                width: 65,
                height: 60,
                backgroundColor: 'gray',

                borderRadius: 9,
                backgroundColor: '#f9e7e7',
              }}></View>
            <View
              style={{
                width: 65,
                height: 60,
                backgroundColor: 'gray',

                borderRadius: 9,
                backgroundColor: '#e7f0f5',
              }}></View>
          </View>

          {teamMembers.map(member => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: 10,
                }}>
                <View style={{width: 65}}>
                  <Avatar.Image
                    size={50}
                    style={{backgroundColor:member.color}}
                    
                    source={require('../sample1/src/Images/hospital.png')}
                  />
                </View>
                <Text style={{color: '#212a35', width: 65}}>{member.name}</Text>
                <Text style={{color: '#212a35', width: 65}}>{member.posion}</Text>
                <View style={{flexDirection: 'row', width: 68}}>
                  <Badge
                    style={{
                      marginBottom: 'auto',
                      marginTop: 'auto',
                      marginRight: 6,
                     
                    }}
                    size={16}
                    color='green'
                    ></Badge>
                  <Text style={{color: '#212a35'}}>{member.state}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={[styles.MyTeam, {height: 200}]}>
          <Text
            style={{
              color: 'red',
              margin: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Quick Links
          </Text>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View
              style={{
                width: 100,
                height: 70,
                backgroundColor: '#def5fa',
                margin: 5,
                borderRadius: 10,
                flexDirection:'row'
             
              }}>
              <Text style={{color: '#212a35',alignSelf:'center'}}>Present </Text>
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
                margin: 5,
                borderRadius: 10,
                flexDirection:'row'
             
              }}>
              <Text style={{color: '#212a35',alignSelf:'center'}}>Present </Text>
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
                margin: 5,
                borderRadius: 10,
                flexDirection:'row'
             
              }}>
              <Text style={{color: '#212a35',alignSelf:'center'}}>Present </Text>
              <MaterialCommunityIcons
              
                  name="arrow-top-right"
                  size={23}
                  color="#0089c8"
                />
            </View>
          </View>
        </View>

        <View style={[styles.MyTeam]}>
          <Text
            style={{
              color: 'red',
              margin: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Quick Links
          </Text>
          {MyTeam.map(() => {
            return (
              <View style={styles.quickLinks}>
                <Text style={{color: '#212a35'}}>Trainee</Text>
                <Avatar.Image
                  size={90}
                  source={require('../sample1/src/Images/hospital.png')}
                />

                <Text style={{color: '#212a35'}}>neeraja</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={33}
                  color="#0089c8"
                />
              </View>
            );
          })}
        </View>
        <View style={[styles.MyTeam]}>
        <Text
            style={{
              color: 'red',
              margin: 10,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
          My tasks
          </Text>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          {MyTeam.map(()=>{
            return(
              <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems:'center',
            width:'80%',
           marginBottom:20,
             height:49,
             borderWidth:1,
           
             borderRadius:10
            }}>
            <Text style={{color: '#212a35'}}>Attendance</Text>
            <Text style={{color: '#212a35'}}>17</Text>
            <Text style={{color: '#139f5a', textDecorationLine: 'underline'}}>
              View All
            </Text>
          </View> 
            )
          })}
          </View>
        </View>
      </ScrollView>
    

      <View style={styles.footerSection}>
        <View>
          <MaterialCommunityIcons
            name="home-variant"
            size={34}
            color="#00ab55"
          />
          <Text style={{color: '#00ab55'}}>Home</Text>
        </View>
        <View>
          <Avatar.Icon
            size={34}
            icon="folder"
            style={{backgroundColor: '#8f81b7'}}
          />
          <Text style={{color: '#637382'}}>My Space</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcons name="notifications" size={34} color="#637382" />
          <Text style={{color: '#637382'}}>Notifications</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  quickLinks: {
    width: '90%',
    height: 60,
    backgroundColor: 'blue',
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
  },
  bottom: {
    height: 250,
    backgroundColor: '#d9d9d9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  MyTeam: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    margin: 10,
    borderRadius: 18,
  },
  footerSection: {
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderTopColor: '#e5e5e5',
  },
});

export default App;
