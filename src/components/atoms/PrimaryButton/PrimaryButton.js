import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import {AppleLogo, FbLogo, GoogleLogo} from '@app/assets/svg';
import {heightToDp, widthToDp} from '@app/utils';

const PrimaryButton = ({
  buttonLabel,
  buttonHeight = heightToDp(48),
  onPressHandler,
  buttonWidth,
  buttonBgColor,
  buttonTextColor,
  buttonIconName,
  buttonIconSize,
  buttonIconColor,
  buttonRadius = widthToDp(40),
  isOutlined,
  testID,
}) => {
  const loginIcon = buttonIconName => {
    switch (buttonIconName) {
      case 'google':
        return <GoogleLogo />;
      case 'facebook':
        return <FbLogo />;
      case 'apple':
        return <AppleLogo />;
      default:
        return null;
    }
  };
  return (
    <Button
      buttonColor={buttonBgColor}
      textColor={buttonTextColor}
      style={{
        borderRadius: buttonRadius,
        justifyContent: 'flex-start',
      }}
      labelStyle={{fontFamily: 'Poppins'}}
      contentStyle={{
        paddingVertical: heightToDp(6),
      }}
      icon={({size, color}) => loginIcon(buttonIconName)}
      testID={testID}
      onPress={onPressHandler}>
      {buttonLabel}
    </Button>
  );
};

export default PrimaryButton;
