import {View, Text, TouchableOpacity} from 'react-native';
import {AddWorkoutIcon, CrownIcon, LogoutIcon, WixxIcon} from '@app/assets/svg';
import {heightToDp, widthToDp} from '@app/utils';
import {Colors} from '@app/constants';
import {Styles} from './CardComponentStyles';

const CardComponent = ({cardName, cardText, onCardPress}) => {
  const cardIcon = cardIconName => {
    switch (cardIconName) {
      case 'workoutHistory':
        return <AddWorkoutIcon />;
      case 'logout':
        return <LogoutIcon />;
      case 'wixx':
        return <WixxIcon />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={onCardPress} style={Styles.container}>
      <View style={Styles.secondaryContainer}>
        <View style={Styles.mainIconStyle}>{cardIcon(cardName)}</View>

        <Text style={Styles.cardTextStyle}>{cardText}</Text>

        <View style={{paddingLeft: widthToDp(7)}}>
          {cardName === 'workoutHistory' ? <CrownIcon /> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;
