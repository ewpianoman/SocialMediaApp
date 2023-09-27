import {StyleSheet} from 'react-native';

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
    marginBottom: 30,
  },
  userPostContainer: {
    marginTop: 20,
    marginHorizontal: 24,
  },
});

export default globalStyle;
