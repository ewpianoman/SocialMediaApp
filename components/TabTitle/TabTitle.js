import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const TabTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {props.title}
    </Text>
  );
};

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default TabTitle;
