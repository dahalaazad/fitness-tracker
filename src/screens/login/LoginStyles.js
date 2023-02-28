import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    height: height,
    width: width,
  },
  overlay: {
    flex: 1,
    backgroundColor: Colors.loginOverlayColor,
  },
  loginMainItemContainer: {
    flex: 1,
    paddingTop: heightToDp(70),
    paddingHorizontal: widthToDp(30),
  },
  loginEmailItemContainer: {
    paddingTop: heightToDp(50),
    paddingHorizontal: widthToDp(30),
  },
  titleTextStyle: {
    textAlign: 'center',
    color: Colors.whiteColor,
    fontSize: widthToDp(34),
    fontFamily: 'Poppins',
  },
  subTitleTextStyle: {
    textAlign: 'center',
    color: Colors.whiteColor,
    fontSize: widthToDp(16),
    fontFamily: 'Poppins',
  },
  textStyle: {
    color: '#000',
  },
  createAccountLinkStyle: {
    textAlign: 'center',
    fontSize: widthToDp(16),
    fontFamily: 'Poppins',
    color: Colors.infoLightColor,
    fontWeight: '700',
  },
  navigateToLoginTextContainer: {
    paddingVertical: heightToDp(24),
    justifyContent: 'center',
  },
  navigateToLoginTextStyle: {
    textAlign: 'center',
    fontSize: widthToDp(16),
    fontFamily: 'Poppins',
    color: Colors.whiteColor,
    fontWeight: '500',
  },
});
