import React from 'react';
import {Skeleton, VStack, HStack, Center} from 'native-base';

export default AnnouncementTemplate = () => {
  return (
    <Center w="100%">
      <HStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={7}
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
        p="2">
        <VStack flex="3" space="3">
          <Skeleton.Text />
        </VStack>
      </HStack>
    </Center>
  );
};
