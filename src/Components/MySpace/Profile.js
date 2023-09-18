import React from 'react';
import { Modal, Image, StatusBar, View, StyleSheet } from 'react-native';
import { Text, Button, HStack } from 'native-base';
import { useSelector } from 'react-redux';
import { AuthUserSelector } from '../../store/Auth';

export default function Profile({ navigation }) {
    const [user] = useSelector(AuthUserSelector)
    return (

        <View style={styles.container}>
            <View style={styles.modalHeader}>
                <Image source={{ uri: user.profile }} style={styles.image} />

            </View>
            <View style={styles.modalBody}>
                {Object.entries(user).map(
                    ([key, value]) =>
                        key != 'profile' &&
                        (
                            <View style={styles.row} key={key}>
                                <Text style={styles.label}>{key}:</Text>
                                <Text style={styles.value}>{value}</Text>
                            </View>
                        ),
                )}
            </View>
            <View style={styles.modalFooter}>
                <HStack space={2}>
                    {/* <Button onPress={onClose} variant="ghost">
                        Close
                    </Button> */}
                    {/* <Button onPress={() => console.log('Save')} colorScheme="blue">
              Save
            </Button> */}
                </HStack>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 1,
        marginRight: 10,
    },
    modalHeader: {
        height: 250,
        width: '100%',
        backgroundColor: '#008080',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalHeaderText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalBody: {
        flex: 1,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    value: {
        flex: 1,
    },
    modalFooter: {
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 5,
    },
});
