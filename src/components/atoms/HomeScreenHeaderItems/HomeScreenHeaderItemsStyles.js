import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  headerTextTop: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.whiteColor,
    fontSize: widthToDp(16),
    paddingBottom: widthToDp(5),
  },
  headerTextBottom: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.whiteColor,
    fontSize: widthToDp(20),
  },
});
