import React from 'react';
import {Modal, Image, StatusBar, View, StyleSheet} from 'react-native';
import {Text, Button, HStack} from 'native-base';

const EmployeeDetailsModal = ({employee, isOpen, onClose}) => {
  const {name, email, phone, designation, imageUrl, department} = employee;

  return (
    <Modal animationType="slide" visible={isOpen}>
      <StatusBar backgroundColor="#008080" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.modalHeaderText}>Employee Details</Text>
        </View>
        <View style={styles.modalBody}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>

          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phone}</Text>

          <Text style={styles.label}>Designation:</Text>
          <Text style={styles.value}>{designation}</Text>

          <Text style={styles.label}>Department:</Text>
          <Text style={styles.value}>{department}</Text>
        </View>
        <View style={styles.modalFooter}>
          <HStack space={2}>
            <Button onPress={onClose} variant="ghost">
              Close
            </Button>
            {/* <Button onPress={() => console.log('Save')} colorScheme="blue">
              Save
            </Button> */}
          </HStack>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 1,
  },
  modalHeader: {
    height: 70,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBody: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 15,
  },
  modalFooter: {
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
  },
});

export default EmployeeDetailsModal;
