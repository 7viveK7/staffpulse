import {View, StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';

export default Notification = ({Navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <Text style={{marginTop: 32, fontSize: 29, color: 'blue'}}>
          Notifications
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
