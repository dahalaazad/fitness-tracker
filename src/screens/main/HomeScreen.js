import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>HomeScreen</Text>

      <Button
        title="Navigate to Profile"
        onPress={() => navigation.navigate('ProfileStack')}
      />

      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('AddWorkoutScreen')}
      />
    </View>
  );
};

export default HomeScreen;

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
