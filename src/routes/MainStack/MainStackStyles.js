import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  headerTextTop: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.whiteColor,
    fontSize: widthToDp(14),
    paddingBottom: widthToDp(5),
  },
  headerTextBottom: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.whiteColor,
    fontSize: widthToDp(18),
  },
  headerImageContainer: {
    borderRadius: widthToDp(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: widthToDp(30),
    backgroundColor: Colors.whiteColor,
  },
  headerImage: {
    borderRadius: widthToDp(25),
    width: widthToDp(40),
    height: heightToDp(40),
    overflow: 'hidden',
  },
  homeScreenHeaderStyle: {
    height: heightToDp(135),
    backgroundColor: Colors.primaryRedColor,
    borderBottomLeftRadius: widthToDp(32),
    borderBottomRightRadius: widthToDp(32),
  },
});
