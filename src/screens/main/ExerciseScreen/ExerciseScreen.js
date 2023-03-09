import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

import CountDown from 'react-native-countdown-component';

import {SkipNextIcon} from '@app/assets/svg';
import {Colors, Images} from '@app/constants';
import {widthToDp} from '@app/utils';
import {Styles} from './ExerciseScreenStyles';
import {ClockTimer} from '@app/components';

const ExerciseScreen = ({navigation}) => {
  const [runTimer, setRunTimer] = useState(false);

  const timerToggle = () => {
    setRunTimer(!runTimer);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.upperHalfContainer}>
        <View style={Styles.topContainer}>
          <View>
            <Text style={Styles.topLineText}>1/4</Text>

            <Text style={Styles.bottomLineText}>Exercise</Text>
          </View>

          <View>
            <Text style={[Styles.topLineText, {paddingLeft: widthToDp(5)}]}>
              25:00
            </Text>

            <Text style={Styles.bottomLineText}>Time Left</Text>
          </View>
        </View>

        <View style={Styles.nextExerciseStyle}>
          <Text style={Styles.bottomLineText}>Next</Text>

          <Text
            style={[Styles.bottomLineText, {color: Colors.primaryTextColor}]}>
            Crunches
          </Text>
        </View>
      </View>

      <View style={Styles.timerContainer}>
        <View style={Styles.timerBorderContainerStyle}>
          <ImageBackground
            source={Images.timerRedBg}
            resizeMode="cover"
            style={Styles.timerStyle}>
            <Text style={Styles.timerTopText}>Work</Text>

            <CountDown
              until={300}
              onFinish={() => alert('Exercise Completed')}
              timeToShow={['M', 'S']}
              size={20}
              digitStyle={Styles.timerCountdownStyle}
              digitTxtStyle={Styles.timerBottomText}
              timeLabels={{m: null, s: null}}
              showSeparator
              separatorStyle={{color: Colors.whiteColor}}
              running={runTimer}
            />
          </ImageBackground>
        </View>
      </View>

      <View style={Styles.controlButtonStyle}>
        <View style={{flex: 1}} />

        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            style={Styles.playButtonStyle}
            onPress={timerToggle}>
            <Ionicons
              name={runTimer ? 'pause' : 'play'}
              color={Colors.whiteColor}
              size={22}
            />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity style={Styles.nextButtonStyle}>
            <SkipNextIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.endWorkoutStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('ResultScreen')}>
          <Text style={Styles.endWorkoutTextStyle}>END WORKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseScreen;
