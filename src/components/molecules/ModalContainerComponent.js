import {Colors} from '@app/constants';
import {
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default function ModalContainerComponent({
  modalVisible,
  toggleModal,
  closeModal,
  animationType,
  children,
  ...props
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
      statusBarTranslucent={true}
      hardwareAccelerated={true}
      {...props}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeModal}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: Colors.loginOverlayColor,
          }}>
          {children}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
}
