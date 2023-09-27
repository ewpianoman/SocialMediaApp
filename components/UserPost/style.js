import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    marginBottom: 20,
    paddingBottom: 20,
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
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
    letterSpacing: 0.16,
    marginBottom: 3,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    letterSpacing: 0.12,
  },
  menuIconContainer: {},
  menuIcon: {
    color: '#79869F',
  },
  postImageContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    height: 220,
  },
  postImage: {
    width: '100%',
    borderRadius: 20,
  },
  interactionsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 5,
    alignItems: 'center',
  },
  interaction: {
    flexDirection: 'row',
    marginRight: 27,
  },
  interactionIcon: {
    color: '#79869F',
    marginRight: 5,
  },
  interactionCount: {
    color: '#79869F',
    fontSize: 14,
    fontFamily: getFontFamily('Inter', 500),
  },
});

export default style;
