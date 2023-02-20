import {StyleSheet, Text, View} from 'react-native';

const WorkoutHistoryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>WorkoutHistoryScreen</Text>
    </View>
  );
};

export default WorkoutHistoryScreen;

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
