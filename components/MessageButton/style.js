import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  messageIcon: {
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
    padding: horizontalScale(12),
  },
  envelope: {
    color: '#898DAE',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(10),
    minWidth: horizontalScale(11),
    minHeight: horizontalScale(11),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: horizontalScale(9),
    right: horizontalScale(6),
    padding: horizontalScale(2),
  },
  messageNumber: {
    color: '#fff',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(6),
    lineHeight: scaleFontSize(7),
  },
});

export default style;
