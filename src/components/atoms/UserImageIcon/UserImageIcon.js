import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Images} from '@app/constants';
import {Styles} from './UserImageIconStyles';
import {widthToDp} from '@app/utils';

const UserImageIcon = ({
  navigation,
  imageContainerBorderRadius = widthToDp(25),
  imageHeight = widthToDp(40),
  imageWidth = widthToDp(40),
  imageBorderRadius = widthToDp(20),
}) => {
  return (
    <TouchableOpacity
      style={[
        Styles.headerImageContainer,
        {borderRadius: imageContainerBorderRadius},
      ]}
      onPress={() => navigation.navigate('ProfileScreen')}>
      <Image
        style={[
          Styles.headerImage,
          {
            height: imageHeight,
            width: imageWidth,
            borderRadius: imageBorderRadius,
          },
        ]}
        source={Images.profilePlaceholderIcon}
      />
    </TouchableOpacity>
  );
};

export default UserImageIcon;
