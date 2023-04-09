import React from 'react';
import {Avatar, Card} from 'react-native-paper';
import {
  TextArea,
  Text,
  VStack,
  Box,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
const myTask = [
  {
    task: 'Attendance',
    numberOf: 13,
    color: '#dbd4ec',
  },
  {
    task: 'Leave',
    numberOf: '7',
    color: '#cfe7f0',
  },
  {
    task: 'Job Offers',
    color: '#f4d3da',
    numberOf: 11,
  },
  {
    task: 'Interview Schedule',
    color: '#fceec7',
    numberOf: 8,
  },
];
import {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import VisfyContext from '../ContextApi/ContextApi';

function AnnouncementForm() {
  const [title, setTitle] = useState('');

  const [textAreaValue, setTextAreaValue] = useState('');
  const [newAnnouncement, setNewAnnouncment] = useState({});
  const handleSubmit = () => {
    const announce = {title, body, id: 78};
    setNewAnnouncment(announce);
    setTitle('');
    setTextAreaValue('');
  };

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>Title :-</Text>
      <Input placeholder="Title" w="100%" autoFocus />
      <Text style={formStyles.label}>Description :-</Text>

      <TextArea
        value={textAreaValue}
        placeholder="Eneter your text here"
        onChange={e => setTextAreaValue(e.currentTarget.value)}
        onChangeText={text => setTextAreaValue(text)}
        w="100%"
        maxW="300"
        h={310}
        maxH={'400'}
        flex={1}
        mb={3}
      />

      <TouchableOpacity style={formStyles.button} onPress={handleSubmit}>
        <Text style={formStyles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const formStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    color: 'blue',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function NewAnnouncement({route}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.Container}>
        <View style={styles.AttendanceCard}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black'}}>Write new announcement Here</Text>

            <Entypo
              name="new-message"
              size={27}
              color="grey"
              //   onPress={() => {
              //     navigation.dispatch(DrawerActions.openDrawer());
              //   }}
            />
          </View>

          <AnnouncementForm />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
  },
  AttendanceCard: {
    flex: 1,

    borderColor: 'grey',
    borderWidth: 0.2,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
