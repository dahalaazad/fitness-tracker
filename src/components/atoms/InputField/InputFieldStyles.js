import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  inputMainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: widthToDp(40),
    paddingVertical: heightToDp(3),
  },
  iconLeftContainer: {
    paddingLeft: widthToDp(18),
    paddingRight: widthToDp(5),
  },
  iconRightContainer: {
    paddingRight: widthToDp(18),
  },
  textInputStyle: {
    flex: 1,
    paddingRight: widthToDp(15),
    fontFamily: 'Poppins',
    fontSize: widthToDp(14),
  },
  errorText: {
    fontFamily: 'Poppins',
    fontSize: widthToDp(12),
    fontWeight: '600',
    color: Colors.primaryRedColor,
    paddingTop: heightToDp(2),
    paddingLeft: widthToDp(20),
  },
});
