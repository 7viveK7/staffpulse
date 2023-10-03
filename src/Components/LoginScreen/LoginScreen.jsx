import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Box, Heading, Image, VStack, Text, Button, Stack } from 'native-base';

const SectionCard = ({ navigation }) => {
  return (
    <Box alignItems="flex-start">
      <Box width={300} overflow="hidden">
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
              onPress={() => navigation.replace('VISFY')}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={{ fontWeight: '900', color: '#fff' }}>
                  Get Started{' '}
                </Text>
                <MaterialIcons name="arrow-right-alt" size={20} color="#fff" />
              </View>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Image
          source={require('../../Images/landingpage.png')}
          style={styles.image}
          alt="not found"
        />
        <Box style={styles.section}>
          <SectionCard navigation={navigation} />
        </Box>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 100,
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
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
  },
});
