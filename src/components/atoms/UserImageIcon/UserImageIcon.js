import {View, Text, TouchableOpacity, Image} from 'react-native';

import {Images} from '@app/constants';
import {Styles} from './UserImageIconStyles';

const UserImageIcon = ({navigation}) => {
  return (
    <TouchableOpacity
      style={Styles.headerImageContainer}
      onPress={() => navigation.navigate('ProfileStack')}>
      <Image style={Styles.headerImage} source={Images.userImageIcon} />
    </TouchableOpacity>
  );
};

export default UserImageIcon;
