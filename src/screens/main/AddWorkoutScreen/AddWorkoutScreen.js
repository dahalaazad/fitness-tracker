import {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useForm, useWatch} from 'react-hook-form';
import Spinner from 'react-native-loading-spinner-overlay';

import {AddExerciseModal, InputField, PrimaryButton} from '@app/components';
import {height, heightToDp, widthToDp} from '@app/utils';
import {Colors} from '@app/constants';
import {ModalContainerComponent} from '@app/components';
import {Styles} from './AddWorkoutScreenStyles';
import {addWorkout} from '@app/redux/slices/fitness/fitnessSlice';

const AddWorkoutScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const loading = useSelector(state => state?.fitness?.loading);

  const form = useForm({
    defaultValues: {
      workoutName: '',
    },
  });
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = form;

  const inputFieldValue = useWatch({control, name: 'workoutName'});

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onSaveWorkout = workoutData => {
    const {workoutName} = workoutData;
    dispatch(
      addWorkout({
        workout: {
          name: workoutName,
        },
      }),
    )
      .unwrap()
      .then(originalPromiseResult => {
        if (originalPromiseResult?.status === 200) {
          navigation.navigate('HomeScreen');
          alert('Workout Added');
        }
      })
      .catch(rejectedValueOrSerializedError => {
        return rejectedValueOrSerializedError;
      });
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Spinner
        visible={loading}
        color={Colors.whiteColor}
        overlayColor={Colors.loginOverlayColor}
        animation="fade"
      />

      <View onPress={closeModal} style={Styles.secondaryContainer}>
        <View style={{paddingTop: heightToDp(40)}}>
          <Text style={Styles.topTextStyle}>Workout Name</Text>

          <InputField
            control={control}
            inputName="workoutName"
            placeholderText=""
            iconName="workoutName"
            inputOutline={true}
            form={form}
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
            onPressHandler={handleSubmit(onSaveWorkout)}
            disabled={inputFieldValue === '' ? true : false}
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
