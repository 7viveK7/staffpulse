import React from 'react';
import { TextArea, Text, Input } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import { useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useAnnouncementContext } from '../Components/ContextApi/NewsContext';

function AnnouncementForm() {
  const { setNewAnnouncement, addNewAnnouncement, newAnnouncement } =
    useAnnouncementContext();
  function handlePress() {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    addNewAnnouncement();
    setNewAnnouncement(prev => ({ ...prev, publishedAt: currentDate }));
  }

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>Title :-</Text>
      <Input
        placeholder="Title"
        w="100%"
        value={newAnnouncement?.title}
        onChangeText={text => {
          setNewAnnouncement(prev => ({ ...prev, title: text }));
        }}
      />
      <Text style={formStyles.label}>Description :-</Text>
      <TextArea
        value={newAnnouncement?.description}
        placeholder="Eneter your text here"
        onChangeText={text =>
          setNewAnnouncement(prev => ({
            ...prev,

            description: text,
          }))
        }
        w="100%"
        maxW="300"
        h={310}
        maxH={'400'}
        flex={1}
        mb={3}
      />

      <TouchableOpacity style={formStyles.button} onPress={handlePress}>
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

export default function NewAnnouncement({ route }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.Container}>
        <View style={styles.AttendanceCard}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'black' }}>Write new announcement Here</Text>

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
