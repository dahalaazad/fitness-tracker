import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowOffset: {width: 0, height: 40},

    shadowColor: Colors.boxShadowColor,
    shadowRadius: 2,
    marginBottom: heightToDp(16),
    backgroundColor: Colors.whiteColor,
    borderRadius: 10,
  },
  secondaryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: heightToDp(12),
  },
  mainIconStyle: {
    paddingLeft: widthToDp(16),
    paddingRight: widthToDp(12),
  },
  cardTextStyle: {
    fontFamily: 'Poppins',
    fontSize: widthToDp(16),
    fontWeight: '500',
    color: Colors.cardTextColor,
  },
});
