import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.whiteColor,
  },
  upperHalfContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 34,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(30),
    paddingTop: 24,
    paddingBottom: 32,
  },
  topLineText: {
    fontSize: widthToDp(24),
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: Colors.primaryTextColor,
  },
  bottomLineText: {
    fontSize: widthToDp(16),
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: Colors.secondaryTextColor,
  },
  nextExerciseStyle: {
    alignItems: 'center',
  },
  timerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  timerBorderContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: widthToDp(60),
    height: widthToDp(250),
    width: widthToDp(250),
    borderWidth: widthToDp(0.5),
    borderRadius: widthToDp(135),
    borderColor: Colors.primaryRedColor,
  },
  timerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: widthToDp(210),
    width: widthToDp(210),
  },
  timerCountdownStyle: {
    backgroundColor: 'transparent',
  },
  timerTopText: {
    color: Colors.whiteColor,
    fontFamily: 'Poppins',
    fontSize: widthToDp(40),
    fontWeight: '700',
  },
  timerBottomText: {
    color: Colors.whiteColor,
    fontFamily: 'Poppins',
    fontSize: widthToDp(34),
    fontWeight: '400',
  },
  controlButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  playButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryRedColor,
    height: widthToDp(56),
    width: widthToDp(56),
    borderRadius: widthToDp(28),
  },
  nextButtonStyle: {
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
    height: widthToDp(48),
    width: widthToDp(48),
    borderRadius: widthToDp(24),
  },
  endWorkoutStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endWorkoutTextStyle: {
    color: Colors.primaryRedColor,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: widthToDp(14),
    fontWeight: '500',
    padding: heightToDp(25),
    marginTop: heightToDp(60),
  },
});
