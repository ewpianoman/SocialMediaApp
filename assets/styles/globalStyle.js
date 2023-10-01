import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userStoryContainer: {
    marginBottom: verticalScale(30),
  },
  userPostContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
});

export default globalStyle;
