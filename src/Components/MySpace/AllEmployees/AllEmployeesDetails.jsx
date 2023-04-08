import React from 'react';
import {View, StyleSheet} from 'react-native';
import EmployeeCard from './EmployeeCard';

const employeesData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Manager',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Engineer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    designation: 'Sales Representative',
    imageUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    id: 4,
    name: 'Alice Williams',
    designation: 'Designer',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 5,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
  {
    id: 6,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
];

export default function EmployeeList() {
  return (
    <View style={styles.container}>
      {employeesData.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
