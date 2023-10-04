import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ProfileStat = props => {
  return (
    <View style={style.statContainer}>
      <Text style={style.stat}>{props.stat}</Text>
      <Text style={style.statType}>{props.statType}</Text>
    </View>
  );
};

ProfileStat.propTypes = {
  stat: PropTypes.string.isRequired,
  statType: PropTypes.string.isRequired,
};

export default ProfileStat;
