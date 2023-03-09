import {StyleSheet} from 'react-native';

import {Colors} from '@app/constants';
import {height, heightToDp, width, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.whiteColor,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: heightToDp(50),
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    paddingBottom: heightToDp(30),
    paddingHorizontal: widthToDp(30),
  },
  userImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: heightToDp(20),
  },
  nameTextStyle: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: widthToDp(20),
    fontWeight: '500',
    color: Colors.primaryTextColor,
    paddingBottom: heightToDp(4),
  },
  emailTextStyle: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: widthToDp(16),
    fontWeight: '500',
    color: Colors.primaryTextColor,
  },
  upgradeButtonContainer: {
    alignItems: 'center',
    paddingBottom: heightToDp(48),
  },
  exerciseCardContainer: {
    marginLeft: widthToDp(18),
    marginRight: widthToDp(16),
  },
});
