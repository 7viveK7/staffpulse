import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Input, Radio, Text, Item, Button } from 'native-base';
import { useAnnouncementContext } from '../Components/ContextApi/NewsContext';

export default function EmployeeForm({ route }) {
  const { newEmployee, setNewEmployee, addEmployee } = useAnnouncementContext();

  const handleChange = (key, value) => {
    setNewEmployee(prev => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Employee Name:</Text>
        <Input
          value={newEmployee?.name}
          onChangeText={value => handleChange('name', value)}
        />

        <Text style={styles.label}>department:</Text>
        <Input
          value={newEmployee?.department}
          onChangeText={value => handleChange('department', value)}
        />

        <Text style={styles.label}>email:</Text>
        <Input
          value={newEmployee?.email}
          onChangeText={value => handleChange('email', value)}
          keyboardType="email"
        />

        <Text style={styles.label}>phone:</Text>
        <Input
          value={newEmployee?.phone}
          keyboardType="numaric"
          onChangeText={value => handleChange('phone', value)}
        />

        <Text style={styles.label}>address:</Text>
        <Input
          value={newEmployee?.address}
          onChangeText={value => handleChange('address', value)}
        />

        <Text style={styles.label}>Designation:</Text>
        <Input
          value={newEmployee?.designation}
          onChangeText={value => handleChange('designation', value)}
        />

        <Text style={styles.label}>salary:</Text>
        <Input
          value={newEmployee?.salary}
          onChangeText={value => handleChange('salary', value)}
        />

        <Text style={styles.label}>hireDate:</Text>
        <Input
          value={newEmployee?.hireDate}
          onChangeText={value => handleChange('hireDate', value)}
        />

        <Text style={styles.label}>supervisor:</Text>
        <Input
          value={newEmployee?.supervisor}
          onChangeText={value => handleChange('supervisor', value)}
        />

        <Button block onPress={addEmployee} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
  },
});
