import { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledView from '../../ReComponent/StyledView';
import { Slider, Icon, Box, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export default function RenderCheckinCheckout() {
  const [clockInTime, setClockInTime] = useState('9:00:00 am');
  const [clockOutTime, setClockOutTime] = useState('6:00:00 pm');
  const [disabledClockIn, setDisabledClockIn] = useState(false);
  const [disabledClockOut, setDisabledClockOut] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null)
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (disabledClockIn) {
      start()
    }
    else {
      stop()
    }
  }, [disabledClockIn])
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



  const start = () => {
    setStartTime(new Date());
  };

  const stop = () => {
    setStartTime(null);
    setEndTime(new Date())
  };

  useEffect(() => {
    if (startTime) {
      const intervalId = setInterval(() => {
        // const seconds = now.getSeconds();
        // const hours = now.getHours();
        // const minutes = now.getMinutes();

        setElapsedTime(Date.now() - startTime);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [startTime]);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
      <View
        style={[styles.button,]}

      >
        <View style={{ flex: 1 }}>
          <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <StyledView value={Math.floor(elapsedTime / 3600000) % 24 || "00"} />
            <Text style={{ color: '#095c85', fontWeight: 'bold', fontSize: 26 }}>:</Text>
            <StyledView value={Math.floor(elapsedTime / 60000) % 60 || "00"} />
            <Text style={{ color: '#095c85', fontWeight: 'bold', fontSize: 26 }}>:</Text>
            <StyledView value={Math.floor(elapsedTime / 1000) % 60 || "00"} />
          </View>
          <View style={{ flex: 1 }} >
            {/* <Slider defaultValue={10} size="sm" colorScheme="#095c85" w="75%" maxW="300" disabled={true}>
              <Slider.Track bg="#c2e9fc">
                <Slider.FilledTrack bg="#095c85" />
              </Slider.Track>
              {/* <Slider.Thumb borderWidth="0" bg="transparent">
                  <Icon as={MaterialCommunityIcons} name="park" color="green.600" size="sm" />
                </Slider.Thumb> 
            </Slider> */}
            <Text
              style={[
                styles.buttonText,
                {
                  color: '#095c85',
                  marginTop: 2,
                },
              ]}>
              Business Hours 09:AM To 06:00 PM

            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => { setDisabledClockIn((prev) => !prev) }} style={{ width: 100, height: 45, borderRadius: 10, backgroundColor: '#095c85', justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={
              styles.buttonText}>
            {!disabledClockIn ? "CHECK IN" : "CHECK OUT"}
          </Text>
        </TouchableOpacity>
      </View>
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
    width: '95%',
    elevation: 1,
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'lightgrey'

  },
  disabledButton: {
    backgroundColor: 'lightgrey',
  },
  textContainer: {
    flex: 1,

  },
  buttonText: {
    color: '#FFF',
    fontWeight: '900',
    fontFamily: 'SofiaSansSemiCondensed',
    fontSize: 12,
  },
});
