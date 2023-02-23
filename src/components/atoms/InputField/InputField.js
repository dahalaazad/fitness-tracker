import {View, TextInput, Text} from 'react-native';
import {useState} from 'react';
import {Controller} from 'react-hook-form';

import {EmailIcon, PWIcon} from '@app/assets/svg';
import {Colors} from '@app/constants';
import {widthToDp} from '@app/utils';
import {Styles} from './InputFieldStyles';

const InputField = ({
  testID,
  control,
  errors,
  rules,
  inputName,
  secureTextEntry = false,
  placeholderText,
  iconName,
  ...props
}) => {
  const inputFieldIcon = name => {
    switch (name) {
      case 'email':
        return <EmailIcon />;
      case 'password':
        return <PWIcon />;
      default:
        return null;
    }
  };

  return (
    <>
      <Controller
        control={control}
        rules={rules}
        name={inputName}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={Styles.inputMainContainer}>
            <View style={Styles.iconContainer}>{inputFieldIcon(iconName)}</View>

            <TextInput
              style={Styles.textInputStyle}
              value={value}
              placeholder={placeholderText}
              placeholderTextColor={Colors.whiteColor}
              secureTextEntry={secureTextEntry}
              onChangeText={onChange}
              testID="inputFieldTest"
              {...props}
            />
          </View>
        )}
      />
      {errors[inputName] && (
        <Text testID={testID} style={Styles.errorText}>
          {errors[inputName]?.message}
        </Text>
      )}
    </>
  );
};

export default InputField;
