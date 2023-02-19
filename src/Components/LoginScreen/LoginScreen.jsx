import React from 'react';

import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import {
  Box,
  Heading,
  AspectRatio,
  Image,
  VStack,
  Text,
  Center,
  Button,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';

const SectionCard = ({navigation}) => {
  return (
    <Box alignItems="flex-start">
      <Box width={300} overflow="hidden">
        {/* <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box> */}
        <Stack p="4" space={2}>
          <Heading size="md" ml="-1" fontSize={25}>
            VISFY
          </Heading>
          <Text fontWeight="400" fontSize={20}>
            Employee experiennce Platform
          </Text>
          <VStack space={4} alignItems="flex-start">
            <Button
              key={'sm'}
              size={'sm'}
              onPress={() => navigation.navigate('VISFY')}>
              Login
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginScreen = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Box style={styles.section}>
          <SectionCard navigation={navigation} />
        </Box>
        <View style={styles.footer}>
          <Text style={{textAlign: 'center'}}>
            By contuining you are engineering to the following Terms of Service
            & User Policies
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    paddingBottom: 7,

    height: 70,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    justifyContent: 'space-between',
  },
  footer: {
    padding: 10,
  },
});
