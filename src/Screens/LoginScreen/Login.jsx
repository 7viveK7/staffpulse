import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Input, Icon, Stack, Text, Pressable, Button, Box } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { employeesSelector, setAuthUser } from '../../store/Auth';
import { useToast } from 'native-base';

export default Login = ({ navigation }) => {
  const toast = useToast()
  const [show, setShow] = useState(false);
  const userList = useSelector(employeesSelector)
  const dispatch = useDispatch()

  const [user, setUser] = useState({ email: '', password: '' });
  const [validate, setValidate] = useState(null);
  const [auorthontication, setauorthontication] = useState(null);

  function onSubmit() {
    const authenticatedUser = userList.filter((authUser) => authUser.mobileNumber == user.email && authUser.password == user.password)

    if (authenticatedUser.length) {
      dispatch(setAuthUser(authenticatedUser))
      navigation.replace('HomeScreen');

    }
    else {
      toast.show({
        description: "Please enter a valid details",
        style: { backgroundColor: '#ffa2ad', },
        shadow: "1"

      })
      setValidate(true);
      setauorthontication(true);
      setUser({ ...user, password: '' });

    }
    // if (user.email === 'vivek' && user.password === '1') {
    //   navigation.push('HomeScreen');
    //   setUser({ email: '', password: '' });

    //   setValidate(false);
    // } else {
    //   setValidate(true);
    //   setauorthontication(true);
    //   setUser({ ...user, password: '' });
    // }
  }

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
      }}>
      <Image
        source={require('../../Images/login.png')}
        style={{ width: '90%', height: 200 }}
      />
      <Stack space={4} w="100%" paddingTop={10} alignItems="center">
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          style={{
            fontWeight: '500', fontSize: 16,
            fontFamily: 'SofiaSansSemiCondensed-Bold',
          }}
          value={user.email}
          keyboardType='phone-pad'
          // InputRightElement={
          //   user.email && (
          //     <Icon
          //       as={
          //         <AntDesign
          //           name={
          //             !validate
          //               ? 'closecircle'
          //               : 'checkcircle'
          //           }
          //         />
          //       }
          //       size={4}
          //       mr="2"
          //       color={user.email === 'vivek' ? 'green.700' : 'danger.600'}
          //     />
          //   )
          // }
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Phone"
          onChangeText={e => {
            setUser({ ...user, email: e });
          }}
        />
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          value={user.password}
          style={{
            fontWeight: '500', fontSize: 16,
            fontFamily: 'SofiaSansSemiCondensed-Bold',
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="lock" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                mr="2"
                size={4}
              // color={!auorthontication ? 'muted.400' : 'danger.500'}
              />
            </Pressable>
          }
          onChangeText={e => {
            setUser({ ...user, password: e });
            setauorthontication(false);
          }}
          placeholder="Password"
        />

        <Text style={{ textAlign: 'right', fontWeight: '500', width: '75%' }}>
          Forget password ?
        </Text>
        <Box alignItems="center" w="100%">
          <Button
            onPress={onSubmit}
            w={{
              base: '75%',
              md: '25%',
            }}>
            <Text style={{ fontWeight: '600', color: '#fff' }}>Login</Text>
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
