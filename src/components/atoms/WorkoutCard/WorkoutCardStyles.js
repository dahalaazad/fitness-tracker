import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(30),
    marginVertical: heightToDp(8),
    borderRadius: widthToDp(20),
    shadowRadius: 20,
    shadowColor: Colors.boxShadowColor,
  },
  playIconContainer: {
    flex: 1,
    backgroundColor: Colors.workoutCardRedColor,
    paddingVertical: heightToDp(30),
    paddingHorizontal: widthToDp(12),
    borderTopLeftRadius: widthToDp(20),
    borderBottomLeftRadius: widthToDp(20),
    elevation: 1,
    shadowRadius: 20,
    shadowColor: Colors.boxShadowColor,
  },
  rightContainer: {
    flex: 9,
    backgroundColor: Colors.whiteColor,
    justifyContent: 'center',
    paddingLeft: widthToDp(10),
    borderTopRightRadius: widthToDp(20),
    borderBottomRightRadius: widthToDp(20),
    elevation: 1,
    shadowRadius: 20,
    shadowColor: Colors.boxShadowColor,
  },
  topTextContainer: {
    paddingBottom: heightToDp(4),
  },
  topTextStyle: {
    fontFamily: 'Poppins',
    fontSize: widthToDp(16),
    fontWeight: '500',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    paddingTop: heightToDp(4),
  },
  bottomTextStyle: {
    fontFamily: 'Poppins',
    fontSize: widthToDp(14),
    fontWeight: '400',
  },
  textSeperatorStyle: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.primaryTextColor,
    paddingHorizontal: widthToDp(4),
  },
});
