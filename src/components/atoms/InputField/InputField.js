import {EmailIcon, PWIcon} from '@app/assets/svg';
import {Colors} from '@app/constants';
import {widthToDp} from '@app/utils';
import {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Styles} from './InputFieldStyles';

const InputField = ({secureTextEntry = false, placeholderText, iconName}) => {
  const [inputValue, setInputValue] = useState('');

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
        value={inputValue}
        placeholder={placeholderText}
        placeholderTextColor={Colors.whiteColor}
        secureTextEntry={secureTextEntry}
        onChangeText={setInputValue}
        testID="inputFieldTest"
      />
    </View>
  );
};

export default InputField;
