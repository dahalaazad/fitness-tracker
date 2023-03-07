import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import {AppleLogo, FbLogo, GoogleLogo} from '@app/assets/svg';
import {heightToDp, widthToDp} from '@app/utils';
import {Colors} from '@app/constants';
import {Styles} from './PrimaryButtonStyles';

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
  borderColor = 'transparent',
  borderWidth = widthToDp(1),
  contentVerticalPadding = heightToDp(6),
  contentHorizontalPadding = widthToDp(0),
  isOutlined,
  disabled = false,
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
      style={{
        borderWidth,
        borderColor,
        borderRadius: buttonRadius,
        justifyContent: 'flex-start',
        backgroundColor: !disabled
          ? buttonBgColor
          : Colors.disabledButtonBgColor,
      }}
      labelStyle={[
        Styles.buttonLabelStyle,
        {
          color: buttonTextColor ? buttonTextColor : Colors.whiteColor,
        },
      ]}
      contentStyle={{
        paddingVertical: contentVerticalPadding,
        paddingHorizontal: contentHorizontalPadding,
      }}
      icon={({size, color}) => loginIcon(buttonIconName)}
      testID={testID}
      onPress={onPressHandler}
      disabled={disabled}>
      {buttonLabel}
    </Button>
  );
};

export default PrimaryButton;
