import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
    lineHeight: 29,
    color: '#022150',
  },
});

export default style;
