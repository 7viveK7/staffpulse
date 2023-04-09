import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import EmployeeCard from './EmployeeCard';
import EmployeeDetailsModal from './EmployeeData';

const employeesData = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Manager',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'Engineer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    designation: 'Sales Representative',
    imageUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 4,
    name: 'Alice Williams',
    designation: 'Designer',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 5,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 6,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 7,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 8,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 9,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 10,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 11,
    name: 'Mike Brown',
    designation: 'Developer',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 12,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
  },
  {
    id: 13,
    name: 'Mike Brown',
    designation: 'Developer',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
  {
    id: 14,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
  {
    id: 14,
    name: 'Sarah Davis',
    designation: 'Marketing Specialist',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '123 Main Street, Anytown, USA',
    salary: 75000,
    hireDate: '2022-01-01',
    department: 'Engineering',
    supervisor: 'Jane Smith',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
];

export default function EmployeeList() {
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [showEmployeeData, setShowEmployeeData] = useState(false);
  return (
    <View style={styles.container}>
      {employeesData.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          setEmployeeDetails={setEmployeeDetails}
          setShowEmployeeData={setShowEmployeeData}
        />
      ))}
      <EmployeeDetailsModal
        employee={employeeDetails}
        onClose={setShowEmployeeData}
        isOpen={showEmployeeData}
      />
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
