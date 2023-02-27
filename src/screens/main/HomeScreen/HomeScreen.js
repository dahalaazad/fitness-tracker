import {
  Text,
  View,
  Button,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {PrimaryButton} from '@app/components';
import {Colors, Images} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';
import {SkippingIcon} from '@app/assets/svg';
import {Styles} from './HomeScreenStyles';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={Styles.container}>
      <StatusBar backgroundColor="#000" />

      <View style={{flex: 1}}>
        <View style={Styles.mainItemContainer}>
          <View style={{paddingBottom: heightToDp(24)}}>
            <SkippingIcon />
          </View>

          <Text style={Styles.textStyle}>
            You haven’t added any workout yet.
          </Text>

          <PrimaryButton
            buttonLabel="ADD NEW WORKOUT"
            buttonBgColor={Colors.primaryRedColor}
            buttonTextColor={Colors.whiteColor}
            onPressHandler={() => navigation.navigate('AddWorkoutScreen')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
