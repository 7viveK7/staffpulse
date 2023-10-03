import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Box, FlatList, Avatar, Text, HStack, VStack, Spacer } from 'native-base';
import React, { useState } from 'react'
import NotificationItem from '../../Components/Notification/NotificationItem';

import { Calendar, LocaleConfig } from 'react-native-calendars';
export default function AttendanceCalender() {
    const [selected, setSelected] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Box style={styles.header} w="100%" bg="gray.200" shadow={3}>
                <Text
                    fontSize="md"
                    style={{
                        color: '#212a35',

                        fontFamily: 'SofiaSansSemiCondensed-Bold',
                    }}>
                    Attendance
                </Text>
            </Box>
            <View style={styles.section}>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    // markedDates={{
                    //     [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    // }}
                    // current={'2023-09-02'}
                    markedDates={{
                        '2023-09-01': { selected: true, marked: true, selectedColor: 'blue' },

                        '2023-09-03': { selected: true, marked: true, selectedColor: 'blue' }
                    }}
                />
            </View>
            {/* section ui */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingBottom: 7,

        height: 70,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 10,
        justifyContent: 'space-between',
    },
    search: {
        width: '100%',
        borderColor: 'none',
        height: 35,
        backgroundColor: 'green',
        color: '#1a1b1b',
        elevation: 0,
    },
    section: {
        flex: 1,
        padding: 5,
    },
});
