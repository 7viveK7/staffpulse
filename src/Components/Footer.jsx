import {useState, useEffect} from 'react';
import {Text, View, Image, Pressable, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MySpace from './MySpace/mySpace';
import {Box} from 'native-base';
export default Footer = ({navigation}) => {
  const [pressedIcon, setPressedIcon] = useState('Home');

  return (
    <Box style={styles.footerSection} w="100%" bg="gray.200" shadow={3}>
      <View>
        <Pressable
          onPress={() => {
            setPressedIcon('Home');
            navigation.navigate('Home');
          }}>
          <MaterialCommunityIcons
            name="home-variant"
            size={34}
            color={'Home' === pressedIcon ? '#00ab55' : '#637382'}
          />
        </Pressable>
        {'Home' === pressedIcon ? (
          <Text
            style={{
              color: 'Home' === pressedIcon ? '#00ab55' : '#637382',
              fontFamily: 'SofiaSansSemiCondensed-Bold',
            }}>
            Home
          </Text>
        ) : (
          ''
        )}
      </View>
      <View>
        <Pressable
          onPress={() => {
            setPressedIcon('MySpace');
            navigation.navigate('MySpace');
          }}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor:
                'MySpace' === pressedIcon ? '#00ab55' : '#dad2fb',
              borderColor: 'MySpace' === pressedIcon ? '#00ab55' : '#ceceeb',
              borderWidth: 2,
              padding: 5,
              borderRadius: 100,
            }}>
            <Image
              style={styles.mySpace}
              source={require('../Images/2.jpeg')}
            />
          </View>
        </Pressable>

        {'MySpace' === pressedIcon ? (
          <Text
            style={{
              color: 'MySpace' === pressedIcon ? '#00ab55' : '#637382',
              fontFamily: 'SofiaSansSemiCondensed-Bold',
            }}>
            My Space
          </Text>
        ) : (
          ''
        )}
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Pressable
          onPress={() => {
            setPressedIcon('Notification');
            navigation.navigate('Notification');
          }}>
          <MaterialIcons
            name="notifications"
            size={34}
            color={'Notification' === pressedIcon ? '#00ab55' : '#637382'}
          />
        </Pressable>
        {'Notification' === pressedIcon ? (
          <Text
            style={{
              color: 'Notification' === pressedIcon ? '#00ab55' : '#637382',
              fontFamily: 'SofiaSansSemiCondensed-Bold',
            }}>
            Notifications
          </Text>
        ) : (
          ''
        )}
      </View>
    </Box>
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
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    margin: 10,
    borderRadius: 18,
  },
  footerSection: {
    width: '100%',
    fontFamily: 'SofiaSansSemiCondensed-Bold',
    paddingLeft: 25,
    paddingRight: 25,
    height: 62,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopColor: '#e5e5e5',
  },
});
