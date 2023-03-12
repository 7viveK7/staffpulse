import React from 'react';
import {Button, Modal, Center, NativeBaseProvider} from 'native-base';
import {useState} from 'react';

export default Chart = ({showModal, setShowModal}) => {
  return (
    <Center>
      <Modal isOpen={showModal}>
        <Modal.Content width="100%" height="60%">
          <Modal.CloseButton
            onPress={() => {
              setShowModal(false);
            }}
          />
          <Modal.Header>Return Policy</Modal.Header>
          <Modal.Body>
            Create a 'Return Request' under “My Orders” section of App/Website.
            Follow the screens that come up after tapping on the 'Return’
            button. Please make a note of the Return ID that we generate at the
            end of the process. Keep the item ready for pick up or ship it to us
            basis on the return mode.
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
