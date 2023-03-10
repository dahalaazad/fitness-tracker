import {View, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@app/constants';
import {Styles} from './WorkoutCardStyles';

const WorkoutCard = ({workoutName}) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.playIconContainer}>
        <Ionicons
          name="play-circle-outline"
          color={Colors.primaryRedColor}
          size={34}
        />
      </TouchableOpacity>

      <View style={Styles.rightContainer}>
        <View style={Styles.topTextContainer}>
          <Text style={Styles.topTextStyle}>{workoutName || ''} </Text>

          <View style={Styles.bottomTextContainer}>
            <Text style={Styles.bottomTextStyle}>5 workout</Text>

            <Text style={Styles.textSeperatorStyle}>.</Text>

            <Text style={Styles.bottomTextStyle}>25:00 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WorkoutCard;
