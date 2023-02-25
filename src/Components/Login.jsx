import React, {useState} from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  Button,
  FormControl,
  Box,
  WarningOutlineIcon,
} from 'native-base';

export default Login = ({navigation}) => {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({email: '', password: ''});
  const [validate, setValidate] = useState(null);
  function onSubmit() {
    if (user.email === 'vivek' && user.password === 'vivek@1') {
      navigation.push('HomeScreen');
      setValidate(false);
    } else {
      setValidate(true);
    }
  }

  return (
    <Stack space={4} w="100%" paddingTop={10} alignItems="center">
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        value={user.email}
        InputRightElement={
          validate && (
            <Icon
              as={<Entypo name="cross" />}
              size={5}
              mr="2"
              color="danger.600"
            />
          )
        }
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Email/Phone"
        onChangeText={e => {
          setUser({...user, email: e});
        }}
      />
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        type={show ? 'text' : 'password'}
        value={user.password}
        InputRightElement={
          !validate ? (
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          ) : (
            <Icon
              as={<Entypo name="cross" />}
              size={5}
              mr="2"
              color="danger.600"
            />
          )
        }
        onChangeText={e => {
          setUser({...user, password: e});
        }}
        placeholder="Password"
      />

      <Box alignItems="center" w="100%">
        <Button
          onPress={onSubmit}
          w={{
            base: '75%',
            md: '25%',
          }}>
          Login
        </Button>
      </Box>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    height: '100%',
  },
});
