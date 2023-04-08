import {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RenderCheckinCheckout() {
  const [clockInTime, setClockInTime] = useState('9:00:00 am');
  const [clockOutTime, setClockOutTime] = useState('6:00:00 pm');
  const [disabledClockIn, setDisabledClockIn] = useState(false);
  const [disabledClockOut, setDisabledClockOut] = useState(true);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      !disabledClockIn && setClockInTime(currentTime);
      !disabledClockOut && setClockOutTime(currentTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [disabledClockIn, disabledClockOut]);

  const handleClockIn = () => {
    setDisabledClockIn(true);
    setDisabledClockOut(false);
  };

  const handleClockOut = () => {
    setDisabledClockOut(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabledClockIn && styles.disabledButton]}
        onPress={handleClockIn}
        disabled={disabledClockIn}>
        <MaterialCommunityIcons
          name="clock-time-nine-outline"
          size={33}
          color={disabledClockIn ? 'grey' : '#0089c8'}
        />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              {
                color: disabledClockIn ? 'grey' : '#0089c8',
              },
            ]}>
            CLOCK IN
          </Text>
          <Text
            style={[
              styles.buttonText,
              {
                color: disabledClockIn ? 'grey' : '#0089c8',
              },
            ]}>
            {clockInTime}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, disabledClockOut && styles.disabledButton]}
        onPress={handleClockOut}
        disabled={disabledClockOut}>
        <MaterialCommunityIcons
          name="clock-time-four-outline"
          size={33}
          color={disabledClockOut ? 'grey' : '#0089c8'}
        />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              {
                color: disabledClockOut ? 'grey' : '#0089c8',
              },
            ]}>
            CLOCK OUT
          </Text>
          <Text
            style={[
              styles.buttonText,
              {
                color:
                  disabledClockOut || !disabledClockIn ? 'grey' : '#0089c8',
              },
            ]}>
            {clockOutTime}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '45%',
    elevation: 1,
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#e9f8ff',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  disabledButton: {
    backgroundColor: 'lightgrey',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: '#2d3842',
    fontWeight: '900',
    fontFamily: 'SofiaSansSemiCondensed',
    fontSize: 12,
  },
});
