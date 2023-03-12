import React, {useEffect, useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Input,
  Icon,
  Stack,
  Text,
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
  const [auorthontication, setauorthontication] = useState(null);

  function onSubmit() {
    if (user.email === 'vivek' && user.password === '1') {
      navigation.push('HomeScreen');
      setUser({email: '', password: ''});

      setValidate(false);
    } else {
      setValidate(true);
      setauorthontication(true);
      setUser({...user, password: ''});
    }
  }

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
      }}>
      <Image
        source={require('.././Images/login.png')}
        style={{width: '90%', height: 200}}
      />
      <Stack space={4} w="100%" paddingTop={10} alignItems="center">
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          value={user.email}
          InputRightElement={
            user.email && (
              <Icon
                as={
                  <AntDesign
                    name={
                      !['vivek'].includes(user.email)
                        ? 'closecircle'
                        : 'checkcircle'
                    }
                  />
                }
                size={4}
                mr="2"
                color={user.email === 'vivek' ? 'green.700' : 'danger.600'}
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
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  !auorthontication ? (
                    <MaterialIcons
                      name={show ? 'visibility' : 'visibility-off'}
                    />
                  ) : (
                    <AntDesign name="closecircle" />
                  )
                }
                mr="2"
                size={4}
                color={!auorthontication ? 'muted.400' : 'danger.500'}
              />
            </Pressable>
          }
          onChangeText={e => {
            setUser({...user, password: e});
            setauorthontication(false);
          }}
          placeholder="Password"
        />

        <Text style={{textAlign: 'right', fontWeight: '500', width: '75%'}}>
          Forget password ?
        </Text>
        <Box alignItems="center" w="100%">
          <Button
            onPress={onSubmit}
            w={{
              base: '75%',
              md: '25%',
            }}>
            <Text style={{fontWeight: '600', color: '#fff'}}>Login</Text>
          </Button>
        </Box>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    height: '100%',
  },
});
