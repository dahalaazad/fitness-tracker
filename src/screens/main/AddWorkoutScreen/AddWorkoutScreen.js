import {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import {useForm} from 'react-hook-form';

import {AddExerciseModal, InputField, PrimaryButton} from '@app/components';
import {height, heightToDp, widthToDp} from '@app/utils';
import {Colors} from '@app/constants';
import {ModalContainerComponent} from '@app/components';
import {Styles} from './AddWorkoutScreenStyles';

const AddWorkoutScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      workoutName: '',
    },
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View onPress={closeModal} style={Styles.secondaryContainer}>
        <View style={{paddingTop: heightToDp(40)}}>
          <Text style={Styles.topTextStyle}>Workout Name</Text>

          <InputField
            control={control}
            inputName="workoutName"
            placeholderText=""
            iconName="workoutName"
            inputOutline={true}
            // {...(modalVisible ? {bgColor: 'transparent'} : {})}
          />

          <TouchableOpacity onPress={toggleModal}>
            <Text style={Styles.bottomTextStyle}>ADD NEW EXERCISE</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingBottom: heightToDp(40)}}>
          <PrimaryButton
            buttonLabel="SAVE WORKOUT"
            buttonBgColor={Colors.primaryRedColor}
            buttonTextColor={Colors.whiteColor}
            onPressHandler={() => navigation.navigate('WorkoutScreen')}
            disabled={true}
          />
        </View>
      </View>

      <ModalContainerComponent
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        closeModal={closeModal}
        animationType="fade">
        <TouchableOpacity activeOpacity={1} onPress={() => {}}>
          <AddExerciseModal />
        </TouchableOpacity>
      </ModalContainerComponent>
    </ScrollView>
  );
};

export default AddWorkoutScreen;
