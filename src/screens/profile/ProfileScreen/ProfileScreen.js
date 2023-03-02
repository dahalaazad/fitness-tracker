import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {logoutUser} from '@app/redux/slices/auth/authSlice';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(originalPromiseResult => {
        originalPromiseResult?.status === 200 &&
          navigation.navigate('AuthStack', {screen: 'LoginMain'});
      })
      .catch(rejectedValueOrSerializedError => {
        return rejectedValueOrSerializedError;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>ProfileScreen</Text>

      <Button title="Logout" onPress={logout} />

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
