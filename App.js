import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Avatar, Card, IconButton, Button, Searchbar} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = () => (
  <Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    left={props => <Avatar.Icon {...props} icon="folder" />}
    right={props => (
      <IconButton {...props} icon="more-vert" onPress={() => {}} />
    )}
  />
);
const Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: true ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: true ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const backgroundStyle = {
    backgroundColor: true ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={true ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.headerPart}>
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search"
              style={styles.search}
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <Avatar.Icon size={20} icon="folder" />
          </View>
          <View>
            <Text>Hello World</Text>
            <Text>View</Text>
          </View>
          <MyComponent />
        </View>
       
        <View style={styles.bottom} >
           <Text>WELCOME</Text>
           <Card>
    <Card.Content style={{width:100}}>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
        </View>
        <View style={styles.WelcomeSection}>

</View>
        <View
          style={{
            backgroundColor: false ? Colors.black : Colors.white,
          }}>
          <MyComponent />
          <MyComponent />
          <MyComponent />
        </View>
      </ScrollView>
      <View style={styles.footerSection} >
      <Avatar.Icon size={24} icon="folder" />

      <Avatar.Icon size={24} icon="folder" />
      <Avatar.Icon size={24} icon="folder" />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  container:{
    height:'100%'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  headerPart: {
    backgroundColor: 'grey',
    height: 230,
    flex: 1,
    marginBottom:10,
  },
  search: {
    width: 250,
    height: 35,
  },
  bottom: {
    height: 300,
    backgroundColor: 'pink',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WelcomeSection:{
//
  },
  footerSection:{
    width:'100%',
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'grey'
  }
});

export default App;
