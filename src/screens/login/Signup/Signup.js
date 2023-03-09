import {useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import Spinner from 'react-native-loading-spinner-overlay';

import {InputField, PrimaryButton} from '@app/components';
import {Colors, Images, InputRules} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';
import {Styles} from '../LoginStyles';
import {authUser} from '@app/redux/slices/auth/authSlice';

const Signup = ({navigation}) => {
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
      fullName: '',
      email: '',
      password: '',
    },
  });

  const createAccountButtonHandler = accountData => {
    const {fullName, email, password} = accountData;
    dispatch(
      authUser({
        userDetails: {
          user: {
            email,
            name: fullName,
            password,
          },
        },
        loginURL: 'signup',
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

            <View style={Styles.inputFieldContainer}>
              <InputField
                testID="fullNameErrorText"
                control={control}
                errors={errors?.fullName || ''}
                inputName="fullName"
                rules={InputRules.fullName}
                placeholderText="Full Name"
                iconName="fullName"
              />
            </View>

            <View style={Styles.inputFieldContainer}>
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

            <View style={Styles.inputFieldContainer}>
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

            <PrimaryButton
              testID="createAccountButton"
              buttonLabel="CREATE ACCOUNT"
              buttonBgColor={Colors.primaryRedColor}
              buttonTextColor={Colors.whiteColor}
              onPressHandler={handleSubmit(createAccountButtonHandler)}
            />

            <View style={Styles.navigateToLoginTextContainer}>
              <Text style={Styles.navigateToLoginTextStyle}>
                Already have an account?
              </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginEmail');
                }}>
                <Text style={Styles.navigateToLoginLinkStyle}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Signup;
