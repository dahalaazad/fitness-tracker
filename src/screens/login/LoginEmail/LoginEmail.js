import {Text, View, ImageBackground, StatusBar, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';

import {InputField, PrimaryButton} from '@app/components';
import {Colors, Images, InputRules} from '@app/constants';
import {heightToDp} from '@app/utils';
import {Styles} from '../LoginStyles';

const LoginEmail = ({navigation}) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const createAccountButtonHandler = accountData => {
    navigation.navigate('HomeStack', {screen: 'HomeScreen'});
  };

  return (
    <ScrollView style={Styles.container}>
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

            <View
              style={{
                height: heightToDp(75),
              }}>
              <InputField
                testID="emailErrorText"
                control={control}
                errors={errors?.email || ''}
                inputName="email"
                rules={InputRules.email}
                placeholderText="Email"
                iconName="email"
              />
            </View>

            <View
              style={{
                height: heightToDp(75),
              }}>
              <InputField
                testID="passwordErrorText"
                control={control}
                errors={errors?.password || ''}
                inputName="password"
                rules={InputRules.password}
                placeholderText="Password"
                iconName="password"
                secureTextEntry={true}
              />
            </View>

            <View style={{paddingBottom: heightToDp(25)}}>
              <PrimaryButton
                testID="loginButton"
                buttonLabel="LOGIN"
                buttonBgColor={Colors.primaryRedColor}
                buttonTextColor={Colors.whiteColor}
                onPressHandler={handleSubmit(createAccountButtonHandler)}
              />
            </View>

            <PrimaryButton
              testID="createAccountButton"
              buttonLabel="CREATE ACCOUNT"
              buttonBgColor={Colors.primaryRedColor}
              buttonTextColor={Colors.whiteColor}
              onPressHandler={() => {}}
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
    </ScrollView>
  );
};

export default LoginEmail;
