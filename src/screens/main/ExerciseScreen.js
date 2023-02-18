import {StyleSheet, Text, View} from 'react-native';

const ExerciseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ExerciseScreen</Text>
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
