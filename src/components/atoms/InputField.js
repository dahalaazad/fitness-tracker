import {View, TextInput} from 'react-native';
import {useState} from 'react';

import {EmailIcon, PWIcon} from '@app/assets/svg';
import {Colors} from '@app/constants';
import {widthToDp} from '@app/utils';
import {Styles} from './InputFieldStyles';

const InputField = ({secureTextEntry = false, placeholderText, iconName}) => {
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
    <View style={Styles.inputMainContainer}>
      <View style={Styles.iconContainer}>{inputFieldIcon(iconName)}</View>

      <TextInput
        style={Styles.textInputStyle}
        placeholder={placeholderText}
        placeholderTextColor={Colors.whiteColor}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputField;
