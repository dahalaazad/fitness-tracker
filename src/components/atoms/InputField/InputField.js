import {useState} from 'react';
import {View, TextInput, Text, Image, TouchableOpacity} from 'react-native';

import {Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {EmailIcon, PWIcon} from '@app/assets/svg';
import {Colors} from '@app/constants';
import {widthToDp} from '@app/utils';
import {Styles} from './InputFieldStyles';

const InputField = ({
  control,
  errors = {},
  rules = {},
  inputName = '',
  secureTextEntry = false,
  setSecureTextEntry,
  isPassword = false,
  passwordIcon = false,
  placeholderText = '',
  iconName = '',
  inputOutline = false,
  bgColor = Colors.inputBackgroundWhite,
  inputFieldOutlineColor = '',
  ...props
}) => {
  const inputFieldLeftIcon = name => {
    switch (name) {
      case 'email':
        return <EmailIcon />;
      case 'password':
        return <PWIcon />;
      case 'fullName':
        return (
          <Ionicons name="person-outline" color={Colors.whiteColor} size={22} />
        );
      default:
        return null;
    }
  };

  const inputFieldRightIcon = name => {
    switch (name) {
      case 'clock':
        return <Feather name="clock" color={Colors.clockIconColor} size={22} />;
      case 'passwordShow':
        return <Feather name="eye" color={Colors.blackColor} size={22} />;
      case 'passwordHide':
        return <Feather name="eye-off" color={Colors.blackColor} size={22} />;
      default:
        return null;
    }
  };

  const passwordToggle = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={inputName}
        render={({field: {onChange, onBlur, value}}) => (
          <View
            style={[
              Styles.inputMainContainer,
              inputOutline && {
                borderWidth: 1,
                borderColor: Colors.inputFieldOutlineColor,
              },
              {backgroundColor: bgColor},
            ]}>
            <View style={Styles.iconLeftContainer}>
              {inputFieldLeftIcon(iconName)}
            </View>

            <TextInput
              style={Styles.textInputStyle}
              testID="inputFieldTest"
              value={value}
              placeholder={placeholderText}
              placeholderTextColor={Colors.whiteColor}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              {...props}
            />

            {isPassword && (
              <TouchableOpacity
                style={Styles.iconRightContainer}
                onPress={passwordToggle}>
                {inputFieldRightIcon(
                  secureTextEntry ? 'passwordHide' : 'passwordShow',
                )}
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      {errors && <Text style={Styles.errorText}>{errors?.message}</Text>}
    </>
  );
};

export default InputField;
