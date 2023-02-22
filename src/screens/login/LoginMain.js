import {Text, View, ImageBackground} from 'react-native';

import {PrimaryButton} from '@app/components';
import {Colors, Images} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';
import {Styles} from './LoginStyles';

const LoginMain = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={Images.loginMainBg}
        style={Styles.imageStyle}
        resizeMode="cover">
        <View style={Styles.overlay}>
          <View style={Styles.loginMainItemContainer}>
            <Text style={Styles.titleTextStyle}>Mercury</Text>

            <Text
              style={[
                Styles.subTitleTextStyle,
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
                Styles.subTitleTextStyle,
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginMain;
