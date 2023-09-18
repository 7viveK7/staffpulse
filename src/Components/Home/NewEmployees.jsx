import { useEffect, useCallback, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

import ScrollIndicator from 'react-native-custom-scroll-indicator';

import { Text } from 'native-base';
import EmployeeDetailsModal from '../AllEmployees/EmployeeData';
import { useAnnouncementContext } from '../ContextApi/NewsContext';
import { employeesSelector } from '../../store/Auth';
import { useSelector } from 'react-redux';
const Employees = [
  {
    id: 0,
    name: 'John Doe',
    designation: 'Manager',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: 'Joined Today',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 1,
    name: 'Smith',
    designation: 'Engineer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 95000,
    hireDate: 'Joined Today',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 2,
    name: 'Johnson',
    designation: 'Jr Developer',
    imageUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: 'Joined Today',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
];
const theames = [
  {
    ImagebackgroundColor: '#fee9a8',
    backgroundColor: '#fffae7',
    color: '#caa846',
    borderColor: '#feeaad',
  },
  {
    ImagebackgroundColor: '#c2e9fc',
    backgroundColor: '#e9f8ff',

    borderColor: '#b8e7f9',
    color: '#095c85',
  },
  {
    color: '#cc4964',
    ImagebackgroundColor: '#fecad6',
    backgroundColor: '#ffeaef',
    borderColor: '#fecad6',
  },
  {
    ImagebackgroundColor: '#fee9a8',
    backgroundColor: '#fffae7',
    color: '#caa846',
    borderColor: '#feeaad',
  },
  {
    ImagebackgroundColor: '#c2e9fc',
    backgroundColor: '#e9f8ff',

    borderColor: '#b8e7f9',
    color: '#095c85',
  },

];

export function NewEmployee({ employ, setEmployeeDetails, setShowEmployData, isAllEmployee = false }) {
  const handlePress = selectedEmploy => {
    setEmployeeDetails(selectedEmploy);
    setShowEmployData(true);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handlePress(employ);
      }}>
      <Card
        key={employ.name}
        style={{
          ...styles.newUser,
          // ...(isAllEmployee && width:)
          backgroundColor: theames[employ.id].backgroundColor,
          borderColor: theames[employ.id].borderColor,
        }}>
        <Card.Content>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: theames[employ.id].ImagebackgroundColor,
              padding: 10,
              borderRadius: 50,
            }}>
            <Image
              style={styles.megha}
              source={{ uri: employ.profile }}
              alt="not found"
            />
          </View>

          <Text
            variant="titleLarge"
            style={{ ...styles.newUserName, color: theames[employ.id].color }}
            numberOfLines={1}>
            {employ?.name}
          </Text>
          <Text
            variant="bodyMedium"
            style={{
              color: '#657582',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {employ.role}
          </Text>
          <Text
            variant="bodyMedium"
            style={{
              color: '#657582',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {employ?.hireDate}
          </Text>
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  );
}
export default function WelcomeToNewEmployee() {
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [showEmloyData, setShowEmployData] = useState(false);
  const { addEmployee } = useAnnouncementContext();
  const newJoiners = useSelector(employeesSelector)

  return (
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
        <View style={{ flexDirection: 'row' }}>
          {newJoiners.map(employ => {
            return (
              <NewEmployee
                employ={employ}
                setEmployeeDetails={setEmployeeDetails}
                setShowEmployData={setShowEmployData}
              />
            );
          })}
        </View>
      </ScrollIndicator>
      <EmployeeDetailsModal
        isOpen={showEmloyData}
        onClose={setShowEmployData}
        employee={employeeDetails}
      />
    </View>
  );
}
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
    textAlign: 'center'
  },
  newUser: {
    width: 150,
    height: 150,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: '#fffae7',
    borderWidth: 1,
    borderColor: '#feeaad',
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
});
