import {Pressable, Text, Box, HStack, Spacer} from 'native-base';
export default function Announcementss({
  item,
  setShowModal,
  setSelectedAnnouncement,
}) {
  console.log(item);
  function handlePress(item) {
    setShowModal(true);
    setSelectedAnnouncement(item);
  }
  return (
    <Box alignItems="center" mb={2} id={item.title}>
      <Pressable
        onPress={() => handlePress(item)}
        rounded="8"
        overflow="hidden"
        borderWidth="1"
        borderColor="coolGray.300"
        width={'100%'}
        shadow="3"
        bg="coolGray.100"
        p="5">
        <Box>
          <HStack alignItems="center">
            <Text
              color="coolGray.800"
              fontWeight="medium"
              fontSize="xl"
              numberOfLines={1}>
              {item.title}
            </Text>
            <Spacer />
          </HStack>

          <Text mt="2" fontSize="sm" color="coolGray.700" numberOfLines={5}>
            {item.description}
          </Text>

          <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
            Read More
          </Text>

          <Text fontSize={10} color="coolGray.800" alignSelf={'flex-end'}>
            {item.publishedAt}
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
}
