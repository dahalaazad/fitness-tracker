import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  inputMainContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: widthToDp(40),
    backgroundColor: Colors.inputBackgroundWhite,
    paddingVertical: heightToDp(3),
  },
  iconContainer: {
    // flex: 1,
    paddingLeft: widthToDp(18),
    paddingRight: widthToDp(5),
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
    color: 'red',
  },
});
