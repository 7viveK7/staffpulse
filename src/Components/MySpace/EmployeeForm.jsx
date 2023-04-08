import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Input, Radio, Text, Item, Button} from 'native-base';

export default function EmployeeForm({route}) {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    number: '',
    dob: '',
    village: '',
    designation: '',
    doj: '',
    experience: '',
  });

  const handleChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Employee Name:</Text>
        <Input
          value={formData.name}
          autoFocus
          onChangeText={value => handleChange('name', value)}
        />

        <Text style={styles.label}>Gender:</Text>
        <Input
          value={formData.gender}
          onChangeText={value => handleChange('gender', value)}
        />

        <Text style={styles.label}>Phone Number:</Text>
        <Input
          value={formData.number}
          onChangeText={value => handleChange('number', value)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Date of Birth:</Text>
        <Input
          value={formData.dob}
          onChangeText={value => handleChange('dob', value)}
        />

        <Text style={styles.label}>Village:</Text>
        <Input
          value={formData.village}
          onChangeText={value => handleChange('village', value)}
        />

        <Text style={styles.label}>Designation:</Text>
        <Input
          value={formData.designation}
          onChangeText={value => handleChange('designation', value)}
        />

        <Text style={styles.label}>Date of Joining:</Text>
        <Input
          value={formData.doj}
          onChangeText={value => handleChange('doj', value)}
        />

        <Text style={styles.label}>Experience:</Text>
        <Input
          value={formData.experience}
          onChangeText={value => handleChange('experience', value)}
        />

        <Button block onPress={handleSubmit} style={styles.button}>
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
    backgroundColor: '#007aff',
  },
  buttonText: {
    color: '#fff',
  },
});
