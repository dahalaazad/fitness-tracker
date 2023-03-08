import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  headerImageContainer: {
    borderRadius: widthToDp(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: widthToDp(30),
    backgroundColor: Colors.whiteColor,
  },
  headerImage: {
    borderRadius: widthToDp(25),
    width: widthToDp(40),
    height: widthToDp(40),
    overflow: 'hidden',
  },
});
