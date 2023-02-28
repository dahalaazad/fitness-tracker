import {
  Text,
  ScrollView,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useForm} from 'react-hook-form';

import {InputField, PrimaryButton} from '@app/components';
import {Colors, Images, InputRules} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';
import {Styles} from '../LoginStyles';

const Signup = ({navigation}) => {
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
                inputName="name"
                rules={InputRules.email}
                placeholderText="Full Name"
                iconName="name"
              />
            </View>

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

            <PrimaryButton
              testID="createAccountButton"
              buttonLabel="CREATE ACCOUNT"
              buttonBgColor={Colors.primaryRedColor}
              buttonTextColor={Colors.whiteColor}
              onPressHandler={() => {}}
            />

            <View style={Styles.navigateToLoginTextContainer}>
              <Text style={Styles.navigateToLoginTextStyle}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LoginEmail');
                }}>
                <Text
                  style={[
                    Styles.createAccountLinkStyle,
                    {paddingLeft: widthToDp(5), paddingTop: heightToDp(15)},
                  ]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Signup;
