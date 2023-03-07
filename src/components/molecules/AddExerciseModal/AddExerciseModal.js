import {Colors} from '@app/constants';
import {Styles} from './AddExerciseModalStyles';
import {useForm} from 'react-hook-form';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import InputField from '../../atoms/InputField/InputField';
import {PrimaryButton} from '@app/components/atoms';
import {height, heightToDp, width} from '@app/utils';

const AddExerciseModal = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      exerciseName: '',
      timePeriod: '',
      restPeriod: '',
    },
  });
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Add Exercise</Text>

      <Text style={Styles.inputheaderText}>Exercise Name</Text>

      <InputField control={control} inputOutline={true} />

      <Text style={Styles.inputheaderText}>Time Period</Text>

      <InputField control={control} inputOutline={true} iconName="clock" />

      <Text style={Styles.inputheaderText}>Rest Period</Text>

      <InputField control={control} inputOutline={true} iconName="clock" />

      <View
        style={{
          paddingTop: heightToDp(15),
          paddingBottom: heightToDp(30),
        }}>
        <PrimaryButton
          buttonLabel="ADD"
          buttonBgColor={Colors.primaryRedColor}
        />
      </View>
    </View>
  );
};

export default AddExerciseModal;
