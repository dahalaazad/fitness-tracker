import {InputField, PrimaryButton} from '@app/components';
import {Colors, Images} from '@app/constants';
import {heightToDp} from '@app/utils';
import {Text, View, ImageBackground} from 'react-native';
import {Styles} from './LoginStyles';

const LoginEmail = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={Images.loginEmailBg}
        style={Styles.imageStyle}
        resizeMode="cover">
        <View style={Styles.overlay}>
          <View style={Styles.loginEmailItemContainer}>
            <Text style={Styles.titleTextStyle}>Mercury</Text>

            <Text
              style={[
                Styles.subTitleTextStyle,
                {paddingTop: heightToDp(8), paddingBottom: heightToDp(40)},
              ]}>
              Track your workout progress faster
            </Text>

            <InputField placeholderText="Email" iconName="email" />

            <View
              style={{
                paddingTop: heightToDp(16),
                paddingBottom: heightToDp(30),
              }}>
              <InputField
                placeholderText="Password"
                iconName="password"
                secureTextEntry={true}
              />
            </View>

            <PrimaryButton
              buttonLabel="CREATE ACCOUNT"
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

export default LoginEmail;
