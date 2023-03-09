import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import {logoutUser} from '@app/redux/slices/auth/authSlice';
import {Colors} from '@app/constants';
import {CardComponent, PrimaryButton, UserImageIcon} from '@app/components';
import {heightToDp, widthToDp} from '@app/utils';
import {Styles} from './ProfileScreenStyles';

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
    <View style={Styles.container}>
      <Spinner
        visible={loading}
        color={Colors.whiteColor}
        overlayColor={Colors.loginOverlayColor}
        animation="fade"
      />

      <View style={Styles.topContainer}>
        <View style={Styles.userImageContainer}>
          <UserImageIcon
            imageContainerBorderRadius={widthToDp(40)}
            imageHeight={widthToDp(80)}
            imageWidth={widthToDp(80)}
            imageBorderRadius={widthToDp(40)}
          />
        </View>

        <Text style={Styles.nameTextStyle}>{`${name || 'User Name'}`}</Text>

        <Text
          style={[Styles.emailTextStyle, {paddingBottom: heightToDp(12)}]}>{`${
          email || 'User Email'
        }`}</Text>

        <View style={Styles.upgradeButtonContainer}>
          <PrimaryButton
            buttonLabel="UPGRADE"
            buttonTextColor={Colors.primaryRedColor}
            borderColor={Colors.primaryRedColor}
            contentVerticalPadding={heightToDp(0)}
            contentHorizontalPadding={widthToDp(0)}
          />
        </View>
        <View style={Styles.cardComponentContainer}>
          <CardComponent
            cardName="workoutHistory"
            cardText="View Workout History"
            onCardPress={() => navigation.navigate('WorkoutHistoryScreen')}
          />
        </View>

        <View style={Styles.cardComponentContainer}>
          <CardComponent
            cardName="logout"
            cardText="Logout"
            onCardPress={logout}
          />
        </View>
      </View>

      <View style={Styles.bottomContainer}>
        <CardComponent cardName="wixx" cardText="WIXX" />
      </View>
    </View>
  );
};

export default ProfileScreen;
