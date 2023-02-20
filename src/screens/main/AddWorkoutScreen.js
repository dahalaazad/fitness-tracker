import {StyleSheet, Text, View, Button} from 'react-native';

const AddWorkoutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>AddWorkoutScreen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('WorkoutScreen')}
      />
    </View>
  );
};

export default AddWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000',
  },
});
