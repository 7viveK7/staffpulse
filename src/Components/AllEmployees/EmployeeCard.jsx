import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native';

const EmployeeCard = ({employee}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: employee.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {employee.name}
        </Text>
        <Text style={styles.designation} numberOfLines={1}>
          {employee.designation}
        </Text>
      </View>
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
