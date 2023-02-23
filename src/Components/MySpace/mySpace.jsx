// import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
// import React from 'react';
// import {
//   Box,
//   IconButton,
//   FlatList,
//   Heading,
//   Avatar,
//   Text,
//   HStack,
//   VStack,
//   Spacer,
//   Center,
//   NativeBaseProvider,
// } from 'native-base';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Footer from '../Footer';

// const MyComponent = () => {
//   const [active, setActive] = React.useState('');

//   return (
//     <Drawer.Section title="Some title">
//       <Drawer.Item
//         label="First Item"
//         active={active === 'first'}
//         onPress={() => setActive('first')}
//       />
//       <Drawer.Item
//         label="Second Item"
//         active={active === 'second'}
//         onPress={() => setActive('second')}
//       />
//     </Drawer.Section>
//   );
// };
// const data = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     fullName: 'Aafreen Khan',
//     timeStamp: '12:47 PM',
//     recentText: 'Good Day!',
//     avatarUrl:
//       'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     fullName: 'Sujitha Mathur',
//     timeStamp: '11:11 PM',
//     recentText: 'Cheer up, there!',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     fullName: 'Anci Barroco',
//     timeStamp: '6:22 PM',
//     recentText: 'Good Day!',
//     avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
//   },
//   {
//     id: '68694a0f-3da1-431f-bd56-142371e29d72',
//     fullName: 'Aniket Kumar',
//     timeStamp: '8:56 PM',
//     recentText: 'All the best',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
//   },
//   {
//     id: '28694a0f-3da1-471f-bd96-142456e29d72',
//     fullName: 'Kiara',
//     timeStamp: '12:47 PM',
//     recentText: 'I will call today.',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
//   },
//   {
//     id: '68694a0f-3da1-431f-bd56-142371e29d724',
//     fullName: 'Aniket Kumar',
//     timeStamp: '8:56 PM',
//     recentText: 'All the best',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
//   },
//   {
//     id: '28694a0f-3da1-471f-bd96-142456e29d723',
//     fullName: 'Kiara',
//     timeStamp: '12:47 PM',
//     recentText: 'I will call today.',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
//   },
//   {
//     id: '68694a0f-3da1-431f-bd56-142371e29d722',
//     fullName: 'Aniket Kumar',
//     timeStamp: '8:56 PM',
//     recentText: 'All the best',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
//   },
//   {
//     id: '28694a0f-3da1-471f-bd96-142456e29d721',
//     fullName: 'Kiara',
//     timeStamp: '12:47 PM',
//     recentText: 'I will call today.',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
//   },
//   {
//     id: '68694a0f-3da1-431f-bd56-142371e29d7227',
//     fullName: 'Aniket Kumar',
//     timeStamp: '8:56 PM',
//     recentText: 'All the best',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
//   },
//   {
//     id: '28694a0f-3da1-471f-bd96-142456e29d7216',
//     fullName: 'Kiara',
//     timeStamp: '12:47 PM',
//     recentText: 'I will call today.',
//     avatarUrl:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
//   },
// ];
// const NoticationItems = () => {
//   return (
//     <Box>
//       <FlatList
//         data={data}
//         renderItem={({item}) => (
//           <Box
//             borderBottomWidth="1"
//             borderColor="muted.200"
//             pl={['0', '4']}
//             pr={['0', '5']}
//             py="2">
//             <HStack space={[2, 3]} justifyContent="space-between">
//               <Avatar
//                 size="48px"
//                 source={{
//                   uri: item.avatarUrl,
//                 }}
//               />
//               <VStack>
//                 <Text
//                   _dark={{
//                     color: 'warmGray.50',
//                   }}
//                   color="coolGray.800"
//                   bold>
//                   {item.fullName}
//                 </Text>
//                 <Text
//                   color="coolGray.600"
//                   _dark={{
//                     color: 'warmGray.200',
//                   }}>
//                   {item.recentText}
//                 </Text>
//               </VStack>
//               <Spacer />
//               <Text
//                 fontSize="xs"
//                 _dark={{
//                   color: 'warmGray.50',
//                 }}
//                 color="coolGray.800"
//                 alignSelf="flex-start">
//                 {item.timeStamp}
//               </Text>
//             </HStack>
//           </Box>
//         )}
//         keyExtractor={item => item.id}
//       />
//     </Box>
//   );
// };
// export default MySpace = ({Navigation}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar translucent backgroundColor="transparent" />
//       <Box style={styles.header} w="100%" bg="gray.200" shadow={3}>
//         <MaterialIcons name="menu" size={27} color={'#637382'} />
//       </Box>
//       <View style={styles.section}>
//         <NoticationItems />
//       </View>
//       <Footer />
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   section: {
//     flex: 1,
//     padding: 5,
//   },
//   header: {
//     paddingBottom: 7,

//     height: 70,
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     padding: 10,
//     justifyContent: 'space-between',
//   },
// });
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MySpace() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
