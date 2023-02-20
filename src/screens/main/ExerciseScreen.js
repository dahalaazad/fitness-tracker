import {StyleSheet, Text, View, Button} from 'react-native';

const ExerciseScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>ExerciseScreen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('ResultScreen')}
      />
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
  textStyle: {
    color: '#000',
  },
});
