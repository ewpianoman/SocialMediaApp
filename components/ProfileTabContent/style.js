import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tabContainer: {},
  profileTabContent: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(145),
    height: verticalScale(90),
  },
});

export default style;
