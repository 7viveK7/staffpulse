import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import AnnouncementModal from '../Home/anouncements/AnnouncementModal';
import Announcementss from './Announcement';
import {useAnnouncementContext} from '.././ContextApi/NewsContext';

export default function AnnouncementsCard({route}) {
  const [showModal, setShowModal] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState('');
  const {announcements} = useAnnouncementContext();
  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={announcements}
        initialNumToRender={true}
        keyExtractor={item => item?.title}
        renderItem={({item}) => (
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
  );
}
