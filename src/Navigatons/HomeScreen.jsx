import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import MySpace from '../Components/Navigation/mySpace';
import Notification from '../Components/Notification/Notification';

import COLORS from '../Components/defaultStyles';


import { AuthUserSelector } from '../store/Auth';
import AttendanceCalender from '../Screens/Attendance/Attendance';
import EmployeeDashboard from './EmployeeDashboard';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const navigation = useNavigation();
  const [user] = useSelector(AuthUserSelector)
  return (
    <Tab.Navigator
      initialRouteName="LoginScreen"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
        },
        tabBarActiveTintColor: 'green',
        tabBarLabelStyle: { marginBottom: 10 },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Attendance') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={MySpace}
        visible={false}
        options={{ headerShown: false }}
      />
      {['HR', 'Manager'].includes(user?.role) && <Tab.Screen
        name="Dashboard"
        options={{ title: 'My Space' }}
        component={EmployeeDashboard}
        visible={false}
      />}
      <Tab.Screen
        name="Attendance"
        component={EmployeeDashboard}
        visible={false}
        options={{ headerShown: false }}
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
