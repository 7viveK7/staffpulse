import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native';

const EmployeeCard = ({employee, setShowEmployeeData, setEmployeeDetails}) => {
  function handlePress(employee) {
    setShowEmployeeData(true);
    setEmployeeDetails(employee);
  }
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => handlePress(employee)}
        style={styles.pressibleIcon}>
        <Image source={{uri: employee.imageUrl}} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name} numberOfLines={1}>
            {employee.name}
          </Text>
          <Text style={styles.designation} numberOfLines={1}>
            {employee.designation}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: '30%',
    alignItems: 'center',
  },
  pressibleIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 1,
  },
  details: {
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  designation: {
    fontSize: 14,

    color: '#888',
    marginBottom: 5,
  },
  experience: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default EmployeeCard;
