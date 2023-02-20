import {AppleLogo, FbLogo, GoogleLogo} from '@app/assets/svg';
import {heightToDp, widthToDp} from '@app/utils';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

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
        height: buttonHeight,
        width: buttonWidth,
        borderRadius: buttonRadius,
        justifyContent: 'center',
      }}
      labelStyle={{fontFamily: 'Poppins'}}
      contentStyle={{height: '100%'}}
      icon={({size, color}) => loginIcon(buttonIconName)}
      onPress={() => {
        onPressHandler();
      }}>
      {buttonLabel}
    </Button>
  );
};

export default PrimaryButton;
