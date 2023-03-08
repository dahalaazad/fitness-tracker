import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Spinner from 'react-native-loading-spinner-overlay';

import {logoutUser} from '@app/redux/slices/auth/authSlice';
import {Colors} from '@app/constants';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state?.auth?.loading);

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
      <Spinner
        visible={loading}
        color={Colors.whiteColor}
        overlayColor={Colors.loginOverlayColor}
        animation="fade"
      />

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
