import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Home from '../Home';
import Icon from 'react-native-vector-icons/Ionicons';
import MySpace from '../MySpace/mySpace';
import Notification from '../Notification/Notification';
import {useNavigation} from '@react-navigation/native';
import CustomTabBar from '../CustomTabBar';
import CustomTabBarButton from '../CustomTabBarButton';
import COLORS from '../defaultStyles';
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="LoginScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarActiveTintColor: 'green',
        tabBarLabelStyle: {marginBottom: 10},
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'MySpace') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} visible={false} />
      <Tab.Screen name="MySpace" component={MySpace} visible={false} />
      <Tab.Screen
        name="Notification"
        component={Notification}
        visible={false}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    borderTopWidth: 0,
    bottom: 0,
    right: 10,
    left: 10,
    height: 92,
  },
});
