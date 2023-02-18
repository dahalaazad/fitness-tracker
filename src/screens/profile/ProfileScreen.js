import {StyleSheet, Text, View, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>ProfileScreen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate('WorkoutHistoryScreen')}
      />
    </View>
  );
};

export default ProfileScreen;

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
