import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: widthToDp(30),
    borderTopRightRadius: widthToDp(30),
    paddingHorizontal: widthToDp(30),
  },
  titleText: {
    textAlign: 'center',
    paddingTop: heightToDp(30),
    paddingBottom: heightToDp(20),
    fontSize: widthToDp(20),
    color: Colors.primaryTextColor,
  },
  inputheaderText: {
    paddingBottom: heightToDp(8),
    color: Colors.primaryTextColor,
  },
});
