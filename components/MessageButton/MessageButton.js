import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
import style from './style';
import {scaleFontSize} from '../../assets/styles/scaling';
import {useNavigation} from '@react-navigation/native';

const MessageButton = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={style.messageIcon}
      onPress={() => navigation.navigate(props.screenName)}>
      <FontAwesomeIcon
        icon={faEnvelope}
        size={scaleFontSize(20)}
        style={style.envelope}
      />
      {props.messageCount !== 0 && (
        <View style={style.messageNumberContainer}>
          <Text style={style.messageNumber}>{props.messageCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

MessageButton.propTypes = {
  messageCount: PropTypes.number,
};

export default MessageButton;
