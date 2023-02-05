import {useState} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';

export default Search = () => {
  const [searchStr, setSearchStr] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <Searchbar
          placeholder="Search"
          style={styles.search}
          inputStyle={{
            padding: 0,
          }}
          onChangeText={e => setSearchStr(e)}
          value={searchStr}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  search: {
    width: 250,
    marginTop: 40,
    alignSelf: 'center',
    height: 35,
    backgroundColor: '#ffffff',
    color: '#1a1b1b',
  },
});
