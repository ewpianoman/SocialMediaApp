import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
    marginTop: verticalScale(12),
  },
  name: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    fontStyle: 'normal',
    letterSpacing: scaleFontSize(0.14),
    marginTop: verticalScale(8),
  },
});

export default style;
