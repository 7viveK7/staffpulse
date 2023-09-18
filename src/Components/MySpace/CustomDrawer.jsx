import React from 'react';
import { ImageBackground, StyleSheet, View, Dimensions } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const { width } = Dimensions.get('screen');
import { Center, Image, Divider } from 'native-base';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { AuthUserSelector } from '../../store/Auth';

const CustomDrawer = props => {
  const [user] = useSelector(AuthUserSelector)
  console.log({ user })
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Card.Title
          title={user?.name}
          subtitle={user?.role}
          subtitleStyle={{ color: "grey", fontSize: 18, fontWeight: '700' }}
          titleStyle={{ color: 'green', fontSize: 20, fontWeight: '900' }}
          // subtitle="Card Subtitle"
          left={props => (
            <Image
              width={50}
              height={50}
              borderWidth={2}
              borderRadius={50}
              borderColor="amber.700"
              // padding={19}
              source={require('../../Images/1.jpeg')}
            />
          )}
        />
      </View>
      <Center>
        <Divider
          w={'80%'}
          borderWidth={1}
          borderRadius="md"
          borderColor="green.200"
          mt={2}
          mb={5}
        />
      </Center>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: 'white',
  },
  drawerListWrapper: {
    marginTop: 45,
  },
});
