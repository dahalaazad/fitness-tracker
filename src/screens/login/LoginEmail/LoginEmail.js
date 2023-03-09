import {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import Config from 'react-native-config';
import Spinner from 'react-native-loading-spinner-overlay';

import {InputField, PrimaryButton} from '@app/components';
import {Colors, Images, InputRules} from '@app/constants';
import {heightToDp} from '@app/utils';
import {Styles} from '../LoginStyles';
import {authUser} from '@app/redux/slices/auth/authSlice';

const LoginEmail = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const dispatch = useDispatch();
  const loading = useSelector(state => state?.auth?.loading);

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
    const {email, password} = accountData;
    dispatch(
      authUser({
        userDetails: {
          user: {
            email,
            password,
          },
        },
        loginURL: 'login',
      }),
    )
      .unwrap()
      .then(originalPromiseResult => {
        if (originalPromiseResult?.status === 200) {
          navigation.navigate('MainStack');
        }
      })
      .catch(rejectedValueOrSerializedError => {
        return rejectedValueOrSerializedError;
      });
  };

  return (
    <ScrollView style={Styles.container}>
      <Spinner
        visible={loading}
        color={Colors.whiteColor}
        overlayColor={Colors.loginOverlayColor}
        animation="fade"
      />

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
                isPassword={true}
                secureTextEntry={secureTextEntry}
                setSecureTextEntry={setSecureTextEntry}
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

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={Styles.createAccountLinkStyle}>Create Account</Text>
            </TouchableOpacity>

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
