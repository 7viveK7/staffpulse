import React from 'react';
import {
  Button,
  Modal,
  HStack,
  Image,
  VStack,
  Text,
  Box,
  Input,
  ScrollView,
} from 'native-base';

import {useState} from 'react';

const SenderChart = ({message, time}) => {
  return (
    <VStack space={1} alignItems="flex-start" bg="gray.100" p={4} rounded="lg">
      <Text alignSelf="flex-end" bg="white" p={2} rounded="lg">
        {message}
      </Text>
      <Text alignSelf="flex-end" fontSize="xs" color="gray.500">
        {time}
      </Text>
    </VStack>
  );
};

const ReceiverChart = ({message, time}) => {
  return (
    <VStack space={1} alignItems="flex-start" bg="gray.100" p={4} rounded="lg">
      <Text alignSelf="flex-start" bg="white" p={2} rounded="lg">
        {message}
      </Text>
      <Text alignSelf="flex-start" fontSize="xs" color="gray.500">
        {time}
      </Text>
    </VStack>
  );
};
export default Chart = ({showModal, senderData, setShowModal}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {id: 1, sender: true, message: 'Hello', time: '08:23 PM'},
    {
      id: 2,
      sender: false,
      message: senderData?.recentText || 'Hi',
      time: senderData?.timeStamp || '08:24 PM',
    },
  ]);

  const sendMessage = () => {
    if (message) {
      const newMessage = {
        id: messages.length + 1,
        sender: true,
        message,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true, // Add AM or PM
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <Modal isOpen={showModal} justifyContent="flex-end" alignItems="center">
      <Modal.Content width="100%" height="100%">
        <Modal.CloseButton
          onPress={() => {
            setShowModal(false);
          }}
        />
        <HStack alignItems="center" px={3} py={2}>
          <Image
            size={10}
            rounded={50}
            source={{
              uri: senderData?.avatarUrl,
            }}
            alt="Logo"
          />
          <VStack ml={5}>
            <Text fontSize="md" bold>
              {senderData?.fullName}
            </Text>
            <Text fontSize="sm" color="gray.500">
              Last seen just now
            </Text>
          </VStack>
        </HStack>

        <ScrollView height={'67%'}>
          {messages.map(msg =>
            msg.sender ? (
              <SenderChart key={msg.id} message={msg.message} time={msg.time} />
            ) : (
              <ReceiverChart
                key={msg.id}
                message={msg.message}
                time={msg.time}
              />
            ),
          )}
        </ScrollView>
        <VStack flex={1} justifyContent="flex-end" pb={6} px={4} bg="gray.100">
          <Box
            bg="white"
            rounded="lg"
            shadow={2}
            py={2}
            px={3}
            h={12}
            mt={2}
            width="100%">
            <HStack>
              <Input
                placeholder="Type your message here"
                value={message}
                flex={1}
                h={8}
                onChangeText={text => setMessage(text)}
              />
              <Button onPress={sendMessage} h={8} ml={3} p={1}>
                Send
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Modal.Content>
    </Modal>
  );
};
