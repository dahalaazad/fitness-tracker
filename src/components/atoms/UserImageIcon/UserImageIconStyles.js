import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  headerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackColor,
  },
  headerImage: {
    overflow: 'hidden',
  },
});
