import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  statContainer: {
    paddingHorizontal: horizontalScale(17),
  },
  stat: {
    fontFamily: getFontFamily('Inter', '600'),
    color: '#022150',
    fontSize: scaleFontSize(20),
    letterSpacing: scaleFontSize(0.4),
    textAlign: 'center',
    paddingBottom: verticalScale(5),
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869F',
    fontSize: scaleFontSize(16),
    textAlign: 'center',
  },
});

export default style;
