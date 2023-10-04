import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  userName: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(31),
    paddingBottom: verticalScale(32),
    marginHorizontal: horizontalScale(28),
    borderBottomWidth: verticalScale(1),
    borderBottomColor: '#EFF2F6',
    alignItems: 'center',
  },
  verticalDivider: {
    width: horizontalScale(1),
    height: horizontalScale(30),
    borderRightColor: '#E9EFF1',
    borderRightWidth: horizontalScale(1),
  },
});

export default style;
