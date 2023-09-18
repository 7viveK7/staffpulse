import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EmployeeCard from './EmployeeCard';
import EmployeeDetailsModal from './EmployeeData';
import { useAnnouncementContext } from '../ContextApi/NewsContext';
import WelcomeToNewEmployee, { NewEmployee } from '../Home/NewEmployees';
import { employeesSelector } from '../../store/Auth';
import { useSelector } from 'react-redux';

export default function EmployeeList() {
  const [showEmployeeData, setShowEmployeeData] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({});
  const employeeList = useSelector(employeesSelector)
  // const { employeesDetails } = useAnnouncementContext();
  return (
    <View style={styles.container}>
      {employeeList.map(employee => (
        <NewEmployee
          key={employee.id}
          employ={employee}
          setEmployeeDetails={setEmployeeDetails}
          setShowEmployData={setShowEmployeeData}
          isAllEmployee={true}
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
