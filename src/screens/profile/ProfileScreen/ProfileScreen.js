import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import {logoutUser} from '@app/redux/slices/auth/authSlice';
import {Colors} from '@app/constants';
import {ExerciseCard, PrimaryButton, UserImageIcon} from '@app/components';
import {heightToDp, widthToDp} from '@app/utils';

const ProfileScreen = ({navigation}) => {
  const {name, email} = useSelector(state => state?.auth?.userInfo);

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

      <View style={styles.topContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: heightToDp(20),
          }}>
          <UserImageIcon
            imageContainerBorderRadius={widthToDp(40)}
            imageHeight={widthToDp(80)}
            imageWidth={widthToDp(80)}
            imageBorderRadius={widthToDp(40)}
          />
        </View>

        <Text style={styles.nameTextStyle}>{`${name || 'User Name'}`}</Text>

        <Text
          style={[styles.emailTextStyle, {paddingBottom: heightToDp(12)}]}>{`${
          email || 'User Email'
        }`}</Text>

        <View style={{alignItems: 'center', paddingBottom: heightToDp(48)}}>
          <PrimaryButton
            buttonLabel="UPGRADE"
            buttonTextColor={Colors.primaryRedColor}
            borderColor={Colors.primaryRedColor}
            contentVerticalPadding={heightToDp(0)}
            contentHorizontalPadding={widthToDp(0)}
          />
        </View>
        <View
          style={{
            marginLeft: widthToDp(18),
            marginRight: widthToDp(16),
          }}>
          <ExerciseCard
            cardName="workoutHistory"
            cardText="View Workout History"
            onCardPress={() => navigation.navigate('WorkoutHistoryScreen')}
          />
        </View>

        <View
          style={{
            marginLeft: widthToDp(18),
            marginRight: widthToDp(16),
          }}>
          <ExerciseCard
            cardName="logout"
            cardText="Logout"
            onCardPress={logout}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <ExerciseCard cardName="wixx" cardText="WIXX" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.whiteColor,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: heightToDp(50),
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    paddingBottom: heightToDp(30),
    paddingHorizontal: widthToDp(30),
  },
  nameTextStyle: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: widthToDp(20),
    fontWeight: '500',
    color: Colors.primaryTextColor,
    paddingBottom: heightToDp(4),
  },
  emailTextStyle: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: widthToDp(16),
    fontWeight: '500',
    color: Colors.primaryTextColor,
  },
});
