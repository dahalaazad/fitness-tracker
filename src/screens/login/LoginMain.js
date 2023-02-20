import {PrimaryButton} from '@app/components';
import {Colors, Images} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const LoginMain = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.loginMainBg}
        style={styles.imageStyle}
        resizeMode="cover">
        <View style={styles.itemContainer}>
          <Text style={styles.titleTextStyle}>Mercury</Text>

          <Text
            style={[
              styles.subTitleTextStyle,
              {paddingVertical: heightToDp(40)},
            ]}>
            Log in or sign up for free
          </Text>

          <PrimaryButton
            buttonLabel="CONTINUE WITH EMAIL"
            buttonBgColor={Colors.primaryRedColor}
            buttonTextColor={Colors.whiteColor}
            onPressHandler={() => navigation.navigate('LoginEmail')}
          />

          <Text
            style={[
              styles.subTitleTextStyle,
              {paddingVertical: heightToDp(24)},
            ]}>
            Or, continue with
          </Text>

          <PrimaryButton
            buttonLabel="GOOGLE"
            buttonBgColor={Colors.buttonBackgroundWhite}
            buttonTextColor={Colors.secondaryTextColor}
            buttonIconName="google"
            onPressHandler={() => {}}
          />

          <View style={{paddingVertical: heightToDp(16)}}>
            <PrimaryButton
              buttonLabel="FACEBOOK"
              buttonBgColor={Colors.buttonBackgroundWhite}
              buttonTextColor={Colors.secondaryTextColor}
              buttonIconName="facebook"
              onPressHandler={() => {}}
            />
          </View>

          <PrimaryButton
            buttonLabel="APPLE"
            buttonBgColor={Colors.buttonBackgroundWhite}
            buttonTextColor={Colors.secondaryTextColor}
            buttonIconName="apple"
            onPressHandler={() => {}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    paddingHorizontal: widthToDp(30),
  },
  titleTextStyle: {
    textAlign: 'center',
    color: Colors.whiteColor,
    fontSize: widthToDp(34),
    fontFamily: 'Poppins',
  },
  subTitleTextStyle: {
    textAlign: 'center',
    color: Colors.whiteColor,
    fontSize: widthToDp(16),
    fontFamily: 'Poppins',
  },
  textStyle: {
    color: '#000',
  },
});
