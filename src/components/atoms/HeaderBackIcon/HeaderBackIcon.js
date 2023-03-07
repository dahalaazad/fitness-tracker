import {View, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';

const HeaderBackIcon = ({navigation, navigateTo}) => {
  return (
    <TouchableOpacity
      style={{paddingLeft: widthToDp(25), paddingTop: heightToDp(20)}}
      onPress={() => navigation.navigate(navigateTo)}>
      <Ionicons name="ios-chevron-back" size={35} color={Colors.whiteColor} />
    </TouchableOpacity>
  );
};

export default HeaderBackIcon;
