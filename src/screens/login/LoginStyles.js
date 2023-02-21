import {StyleSheet} from 'react-native';
import {Colors} from '@app/constants';
import {heightToDp, widthToDp} from '@app/utils';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
  },
  itemContainer: {
    paddingTop: heightToDp(70),
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
});
