import React from 'react';
import { Button, Modal, Center, Text, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import NotificationItem from '../../../Screens/Notification/NotificationItem';
export default AnnouncemengtModal = ({
  showModal,
  selectedItem,
  setShowModal,
}) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      safeAreaTop={true}>
      <Modal.Content maxWidth="350" {...styles['AttendanceModal']}>
        <Modal.CloseButton />
        <Modal.Header>{selectedItem.title}</Modal.Header>
        <Modal.Body>{selectedItem.description}</Modal.Body>
        <Modal.Footer>
          <Text fontSize={10} color="coolGray.800" alignSelf={'flex-end'}>
            {selectedItem.publishedAt}
          </Text>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

const styles = StyleSheet.create({
  AttendanceModal: {
    marginBottom: 0,
    marginTop: 'auto',
    width: '100%',
    height: '95%',
  },
});
