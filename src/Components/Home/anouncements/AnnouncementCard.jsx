import {View, Pressable} from 'react-native';

import {Text, VStack, Box, Center} from 'native-base';

const announcementColors = [
  {bg1: '#d1fae5', border1: '#10b981'},
  {bg1: '#ffedd5', border1: '#fb923c'},
  {bg1: '#fae8ff', border1: '#e879f9'},
  {bg1: '#e0f2fe', border1: '#38bdf8'},
  {bg1: '#fee2e2', border1: '#f87171'},
  {bg1: '#d1fae5', border1: '#34d399'},
  {bg1: '#ecfeff', border1: '#22d3ee'},
];
export default AnnouncementCard = ({item, index, handleItemPress}) => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => handleItemPress(item)}>
        <Box
          style={{
            marginLeft: 10,
            elevation: 3,
            ...(index == 9 && {
              marginRight: 10,
            }),
          }}>
          <Center
            w="64"
            h="20"
            bg={announcementColors[randomNumber].bg1}
            rounded="md"
            shadow={13}
            style={{
              borderLeftColor: announcementColors[randomNumber].border1,
              padding: 10,
              borderLeftWidth: 3,
            }}>
            <VStack>
              <Text color="coolGray.800" bold numberOfLines={1}>
                {item.title}
              </Text>

              <Text color="coolGray.600" numberOfLines={1}>
                {item.description}
              </Text>
              <Text fontSize={10} color="coolGray.800" alignSelf={'flex-end'}>
                {item.publishedAt}
              </Text>
            </VStack>
          </Center>
        </Box>
      </Pressable>
    </View>
  );
};
