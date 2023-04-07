import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuickLinks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Links</Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.link} onPress={() => {}}>
          <Text style={styles.linkText}>Holiday Calendar</Text>
          <MaterialCommunityIcons
            name="arrow-top-right"
            style={styles.linkIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => {}}>
          <Text style={styles.linkText}>Leave Policy</Text>
          <MaterialCommunityIcons
            name="arrow-top-right"
            style={styles.linkIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => {}}>
          <Text style={styles.linkText}>Payroll Manual</Text>
          <MaterialCommunityIcons
            name="arrow-top-right"
            style={styles.linkIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    margin: 10,
    borderRadius: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,

    color: '#000',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  link: {
    width: 100,
    height: 70,
    backgroundColor: '#def5fa',
    padding: 6,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkText: {
    color: '#212a35',
    fontFamily: 'SofiaSansSemiCondensed-Bold',
    fontSize: 17,
  },
  linkIcon: {
    color: '#0089c8',
    fontSize: 23,
    position: 'absolute',
    top: 2,
    right: 2,
  },
});

export default QuickLinks;
