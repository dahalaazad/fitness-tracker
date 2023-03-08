import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.whiteColor,
  },
  secondaryContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(30),
  },
  topTextStyle: {
    color: Colors.primaryTextColor,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: widthToDp(14),
    paddingBottom: heightToDp(8),
  },
  bottomTextStyle: {
    color: Colors.primaryRedColor,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: widthToDp(14),
    textAlign: 'right',
  },
});
