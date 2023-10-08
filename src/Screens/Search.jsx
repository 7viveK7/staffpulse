import { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Box, HStack, Text, Badge, Pressable, FlatList } from 'native-base';
import { Searchbar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Announcementss from './Announcements/Announcement';
import AnnouncementModal from '../Components/Home/anouncements/AnnouncementModal';
import { useAnnouncementContext } from '../Components/ContextApi/NewsContext';

export default Search = ({ navigation, route }) => {
  const [searchStr, setSearchStr] = useState('');
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [activePill, setActivePill] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState('');
  const { announcements } = useAnnouncementContext();
  const filteredAnnouncementsHandler = useCallback(() => {
    if (searchStr !== '') {
      const searchedData = announcements.filter(el =>
        el.title.toLowerCase().includes(searchStr.toLowerCase()),
      );
      setFilteredAnnouncements(searchedData);
    } else {
      setFilteredAnnouncements([]);
    }
  }, [announcements, searchStr, setFilteredAnnouncements]);

  useEffect(() => {
    filteredAnnouncementsHandler();
  }, [filteredAnnouncementsHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Box>
        <Searchbar
          style={{
            width: '100%',
            borderColor: 'none',

            height: 35,
            backgroundColor: '#ffffff',
            color: '#black',
          }}
          placeholderTextColor="black"
          inputStyle={{
            color: 'black',
            padding: 0,
          }}
          elevation={0}
          placeholder="Search"
          icon={() => (
            <MaterialIcons
              name="keyboard-arrow-left"
              size={33}
              color="grey"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          )}
          autoFocus={true}
          onChangeText={e => setSearchStr(e)}
          value={searchStr}
        />

        <HStack alignItems="center" pl={5}>
          {['Announcment', 'Employee', 'Celebrations'].map(each => {
            return (
              <Box
                boxWithShadow={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.1,
                  shadowRadius: 1,
                }}>
                <Pressable id={each} onPress={id => console.warn(id)}>
                  <Badge
                    colorScheme={activePill ? '#a1a1aa' : 'green'}
                    _text={{
                      color: 'black',
                    }}
                    m={1}
                    rounded="4">
                    {each}
                  </Badge>
                </Pressable>
              </Box>
            );
          })}
        </HStack>
      </Box>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Text
          style={{
            color: '#212a35',
            fontFamily: 'SofiaSansSemiCondensed-Bold',
          }}>
          Suggitions
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <FlatList
          data={filteredAnnouncements}
          initialNumToRender={true}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <Announcementss
              item={item}
              setShowModal={setShowModal}
              setSelectedAnnouncement={setSelectedAnnouncement}
            />
          )}
        />
        <AnnouncementModal
          selectedItem={selectedAnnouncement}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 36,
    backgroundColor: 'white',
  },
  megha: {
    width: 26,
    height: 26,

    borderRadius: 50,
    alignSelf: 'center',
  },

  search: {
    width: '100%',
    borderColor: 'none',
    marginTop: 3,
    height: 35,
    backgroundColor: '#ffffff',
    color: '#1a1b1b',
  },
});
