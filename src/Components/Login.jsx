import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Box, KeyboardAvoidingView, Center, Text} from 'native-base';
export default Login = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <>
      <KeyboardAvoidingView
        h={{
          base: '400px',
          lg: 'auto',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />
          <Box style={styles.header} w="100%" bg="gray.200" shadow={3}>
            <Text
              fontSize="md"
              style={{
                color: '#212a35',

                fontFamily: 'SofiaSansSemiCondensed-Bold',
              }}>
              Home
            </Text>
            <Text>Space</Text>
          </Box>
          <Box
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              mode="outlined"
              label="User Name"
              placeholder="Type something"
              style={{width: 250, height: 35, marginBottom: 10}}
            />
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry
              placeholder="Type something"
              style={{width: 250, height: 35, marginBottom: 10}}
            />
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Home')}>
              {' '}
              {/* can add icon  */}
              Press me
            </Button>
          </Box>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    padding: 5,
  },
  header: {
    paddingBottom: 7,

    height: 70,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    justifyContent: 'space-between',
  },
});
