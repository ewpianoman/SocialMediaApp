import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  messageIcon: {
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    padding: 12,
  },
  envelope: {
    color: '#898DAE',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    minWidth: 11,
    minHeight: 11,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 6,
    padding: 2,
  },
  messageNumber: {
    color: '#fff',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 6,
    lineHeight: 7,
  },
});

export default style;
