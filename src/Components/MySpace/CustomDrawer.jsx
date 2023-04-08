import React from 'react';
import {ImageBackground, StyleSheet, View, Dimensions} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const {width} = Dimensions.get('screen');
import {Center, Image, Divider} from 'native-base';
import {Avatar, Card, IconButton} from 'react-native-paper';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Card.Title
          title="Vivek"
          titleStyle={{color: 'green', fontSize: 20, fontWeight: '900'}}
          // subtitle="Card Subtitle"
          left={props => (
            <Image
              width={20}
              height={10}
              borderWidth={2}
              borderColor="amber.700"
              padding={19}
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
