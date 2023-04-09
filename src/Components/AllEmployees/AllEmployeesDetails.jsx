import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import EmployeeCard from './EmployeeCard';
import EmployeeDetailsModal from './EmployeeData';
import {useAnnouncementContext} from '../ContextApi/NewsContext';

export default function EmployeeList() {
  const [showEmployeeData, setShowEmployeeData] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({});

  const {employeesDetails} = useAnnouncementContext();
  return (
    <View style={styles.container}>
      {employeesDetails.map(employee => (
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
