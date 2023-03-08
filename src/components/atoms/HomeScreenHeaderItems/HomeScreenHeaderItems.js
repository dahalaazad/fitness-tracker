import {View, Text} from 'react-native';
import {Styles} from './HomeScreenHeaderItemsStyles';

const HomeScreenHeaderItems = ({userName}) => {
  return (
    <View>
      <Text style={Styles.headerTextTop}>Good Morning,</Text>

      <Text style={Styles.headerTextBottom}>{`${
        userName || 'User Name'
      }`}</Text>
    </View>
  );
};

export default HomeScreenHeaderItems;
