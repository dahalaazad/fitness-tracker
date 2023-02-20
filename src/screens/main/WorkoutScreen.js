import {StyleSheet, Text, View, Button} from 'react-native';

const WorkoutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>WorkoutScreen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('ExerciseScreen')}
      />
    </View>
  );
};

export default WorkoutScreen;

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
