import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryRedColor,
    height: heightToDp(100),
    borderBottomLeftRadius: widthToDp(32),
    borderBottomRightRadius: widthToDp(32),
    paddingTop: heightToDp(22),
  },
  headerTextContainerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  headerTextStyle: {
    fontFamily: 'Poppins',
    fontSize: widthToDp(20),
    fontWeight: '500',
    color: Colors.whiteColor,
  },
  backChevronStyle: {
    paddingLeft: widthToDp(20),
  },
});
