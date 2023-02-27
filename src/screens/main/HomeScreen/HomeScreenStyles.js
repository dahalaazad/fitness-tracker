import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
    paddingTop: heightToDp(55),
    paddingHorizontal: widthToDp(30),
  },
  textStyle: {
    color: Colors.primaryTextColor,
    paddingBottom: heightToDp(35),
    fontFamily: 'Poppins',
    fontSize: widthToDp(16),
    fontWeight: '600',
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
