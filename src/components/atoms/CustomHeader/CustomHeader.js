import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './CustomHeaderStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {heightToDp, widthToDp} from '@app/utils';
import {Colors} from '@app/constants';

const CustomHeader = ({navigation, headerTitle}) => {
  return (
    <View style={Styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={Styles.backChevronStyle}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons
            name="ios-chevron-back"
            size={35}
            color={Colors.whiteColor}
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.headerTextContainerStyle}>
        <Text style={Styles.headerTextStyle}>{headerTitle}</Text>
      </View>

      {/* Empty View for flex-implementation */}
      <View style={{flex: 1}} />
    </View>
  );
};

export default CustomHeader;
