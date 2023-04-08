import {useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Avatar, Card} from 'react-native-paper';

import ScrollIndicator from 'react-native-custom-scroll-indicator';

import {Text} from 'native-base';

export default function WelcomeToNewEmployee() {
  return (
    <View style={styles.welcomeCard}>
      <Text style={styles.welcomeCardTitle}>Welcome</Text>

      <ScrollIndicator
        horizontal={true}
        indicatorStyle={{
          height: 8,
          width: 40,
          backgroundColor: '#00ab55',
          borderRadius: 5,
        }}
        scrollViewBoxStyle={{
          width: '100%',
        }}
        indicatorBackgroundStyle={{
          height: 8,
          width: 120,
          borderRadius: 5,
          backgroundColor: '#add0bf',
        }}
        viewBoxStyle={{
          alignItems: 'center',

          // marginTop: 60
        }}>
        <View style={{flexDirection: 'row'}}>
          <Card style={styles.newUser}>
            <Card.Content>
              <View
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#fee9a8',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Image
                  style={styles.megha}
                  source={require('../../Images/3.jpeg')}
                  alt="not found"
                />
              </View>

              <Text variant="titleLarge" style={styles.newUserName}>
                Megha
              </Text>
              <Text
                variant="bodyMedium"
                style={{
                  color: '#657582',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Ux Designer Join today
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              ...styles.newUser,
              backgroundColor: '#e9f8ff',

              borderColor: '#b8e7f9',
            }}>
            <Card.Content>
              <View
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#c2e9fc',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Image
                  style={styles.megha}
                  source={require('../../Images/1.jpeg')}
                  alt="error"
                />
              </View>
              <Text
                variant="titleLarge"
                style={{
                  color: '#095c85',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Megha
              </Text>
              <Text
                variant="bodyMedium"
                style={{
                  color: '#657582',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Ux Designer Join today
              </Text>
            </Card.Content>
          </Card>
          <Card
            style={{
              ...styles.newUser,
              backgroundColor: '#ffeaef',
              borderColor: '#fecad6',
            }}>
            <Card.Content>
              <View
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#fecad6',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Image
                  style={styles.megha}
                  source={require('../../Images/2.jpeg')}
                  alt="loading.."
                />
              </View>
              <Text
                variant="titleLarge"
                style={{
                  color: '#cc4964',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Megha
              </Text>
              <Text
                variant="bodyMedium"
                style={{
                  color: '#657582',
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                Ux Designer Join today
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollIndicator>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  welcomeCardTitle: {
    fontSize: 28,
    paddingTop: 10,
    fontFamily: 'SofiaSansSemiCondensed-Bold',
    color: '#334155',
  },

  megha: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  newUserName: {
    color: '#caa846',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  newUser: {
    width: 130,
    height: 150,
    margin: 10,
    borderRadius: 12,
    backgroundColor: '#fffae7',
    borderWidth: 1,
    borderColor: '#feeaad',
  },

  welcomeCard: {
    height: 250,
    flex: 1,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
