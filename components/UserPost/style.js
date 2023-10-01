import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  postContainer: {
    borderBottomWidth: scaleFontSize(1),
    borderBottomColor: '#EFF2F6',
    marginBottom: verticalScale(20),
    paddingBottom: verticalScale(20),
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    marginLeft: horizontalScale(10),
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    letterSpacing: scaleFontSize(0.16),
    marginBottom: verticalScale(3),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    letterSpacing: scaleFontSize(0.12),
  },
  menuIconContainer: {},
  menuIcon: {
    color: '#79869F',
  },
  postImageContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  postImage: {},
  interactionsContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(5),
    alignItems: 'center',
  },
  interaction: {
    flexDirection: 'row',
    marginRight: horizontalScale(27),
  },
  interactionIcon: {
    color: '#79869F',
    marginRight: horizontalScale(5),
  },
  interactionCount: {
    color: '#79869F',
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Inter', 500),
  },
});

export default style;
