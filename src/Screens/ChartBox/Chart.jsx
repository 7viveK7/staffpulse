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
  StatusBar,
} from 'native-base';
import { SafeAreaView, View } from 'react-native'
import { useState } from 'react';
import { useRef } from 'react';

const SenderChart = ({ message, time }) => {
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

const ReceiverChart = ({ message, time }) => {
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

const Chart = ({ senderData = {}, route }) => {
  const scrollRef = useRef()
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: true, message: 'Hello', time: '08:23 PM' },
    {
      id: 2,
      sender: false,
      message: route.params.selectedUser?.recentText || 'Hi',
      time: route.params.selectedUser?.timeStamp || '08:24 PM',
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
    <View style={{ flex: 1, backgroundColor: 'gray.100' }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        hidden={false}
        translucent={false}
      />
      <HStack alignItems="center" px={3} py={2} bg='#fff'>
        <Image
          size={10}
          rounded={50}
          source={{
            uri: route.params.selectedUser?.avatarUrl,
          }}
          alt="Logo"
        />
        <VStack ml={5}>
          <Text fontSize="md" bold>
            {route.params.selectedUser?.fullName}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Last seen just now
          </Text>
        </VStack>
      </HStack>
      <ScrollView height={'67%'} ref={scrollRef}
        onContentSizeChange={() => {
          scrollRef.current.scrollToEnd({ animated: true });
        }}>
        {messages.map((msg) =>
          msg.sender ? (
            <SenderChart key={msg.id} message={msg.message} time={msg.time} />
          ) : (
            <ReceiverChart key={msg.id} message={msg.message} time={msg.time} />
          )
        )}
      </ScrollView>
      <VStack flex={1} justifyContent="flex-end" pb={6} px={4} bg="#fff">
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
              onChangeText={(text) => setMessage(text)}
            />
            <Button onPress={sendMessage} h={8} ml={3} p={1}>
              Send
            </Button>
          </HStack>
        </Box>
      </VStack>
    </View>
  );
};

export default Chart;
