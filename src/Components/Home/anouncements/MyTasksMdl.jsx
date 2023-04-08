import {VStack, Modal, Text, Box, HStack, Divider} from 'native-base';
import {StyleSheet} from 'react-native';
import NotificationItem from '../../Notification/NotificationItem';

export default function AttendanceMl({openAttendance, setopenAttendance}) {
  return (
    <>
      <Modal
        isOpen={openAttendance ? true : false}
        onClose={() => setopenAttendance(false)}
        safeAreaTop={true}>
        <Modal.Content maxWidth="350" {...styles['AttendanceModal']}>
          <Modal.CloseButton />
          <Modal.Header>{openAttendance}</Modal.Header>
          <Modal.Body>
            <NotificationItem />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  AttendanceModal: {
    marginBottom: 0,
    marginTop: 'auto',
    width: '100%',
    height: '90%',
  },
});
