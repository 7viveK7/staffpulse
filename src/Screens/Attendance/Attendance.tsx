import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Box, FlatList, Avatar, Text, HStack, VStack, Spacer } from 'native-base';
import React, { useState } from 'react'
import NotificationItem from '../Notification/NotificationItem';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Octicons';

const attendanceData = {
    '2023-10-01': [{ startDate: 10 }, { endDate: 2 }],
    '2023-10-02': [{ startDate: 7 }, { endDate: 2 }],
    // Add more event data as needed...
};

const workingDays = [
    {
        "type": "Payble Days",
        "days": 10
    },
    {
        "type": "Present",
        "days": 0
    },
    {
        "type": "On Duty",
        "days": 0
    },
    {
        "type": "Paid Leaves",
        "days": 0
    },
    {
        "type": "Holiday",
        "days": 0
    },
    {
        "type": "Weekend",
        "days": 0
    },
    {
        "type": "Absent",
        "days": 0
    },
    {
        "type": "Unpaid Leave",
        "days": 0
    }
]
const CustomDayComponent = ({ date, marking }) => {
    const timeString1 = '10:00:00';
    const timeString2 = '1:30:10';

    const time1 = new Date(`${date.dateString}T${timeString1}Z`);
    const time2 = new Date(`${date.dateString}T${timeString2}Z`);

    const eventCount = attendanceData[date.dateString]?.length || null;
    const attendancePeriods = attendanceData[date.dateString] || [];

    const timeDifference = Math.abs(time2 - time1);

    // Convert milliseconds to hours, minutes, and seconds
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);

    return (
        <View>
            <Text textAlign={'center'}>{date.day}</Text>
            {eventCount && <>
                {/* <Text style={{ color: 'green' }}>{eventCount} </Text> */}
                <Text style={{ color: 'green' }} textAlign={'center'}>
                    {`${hours}:${minutes}`}
                </Text>
            </>}
        </View>
    );
};

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
                    dayComponent={CustomDayComponent}
                // markedDates={{
                //     [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                // }}
                // // current={'2023-09-02'}
                // markedDates={{
                //     '2023-09-01': { selected: true, marked: true, selectedColor: 'blue' },

                //     '2023-09-03': { selected: true, marked: true, selectedColor: 'blue' }
                // }}
                />
                <View style={{ width: "100%", borderRadius: 5, backgroundColor: '#fff', marginTop: 10, padding: 12, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name={'clock'} size={22} color={'black'} style={{ marginRight: 5 }} />
                        <Text >Total Working Hours</Text>
                    </View>

                    <Text >74:23</Text>
                </View>

                <View style={{ width: "100%", borderRadius: 5, backgroundColor: '#fff', marginTop: 10, padding: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {workingDays.map((workingday) => {
                        return (

                            <View style={{ width: "48%", borderRadius: 5, backgroundColor: 'green', marginTop: 10, padding: 10 }} >
                                <Text style={{ color: '#fff' }}>{workingday?.type}</Text>
                                <Text style={{ color: '#fff' }}>{workingday?.days}</Text>
                            </View>
                        )
                    })}


                </View>
            </View>

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
