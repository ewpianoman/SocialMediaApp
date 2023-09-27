import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faCommentDots,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.postContainer}>
      <View style={style.postHeader}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.infoContainer}>
            <TouchableOpacity>
              <Text style={style.name}>
                {props.firstName} {props.lastName}
              </Text>
            </TouchableOpacity>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity style={style.menuIconContainer}>
          <FontAwesomeIcon icon={faEllipsis} size={24} style={style.menuIcon} />
        </TouchableOpacity>
      </View>
      <View style={style.postImageContainer}>
        <Image
          source={props.image}
          style={style.postImage}
          resizeMode="cover"
        />
      </View>
      <View style={style.interactionsContainer}>
        <TouchableOpacity style={style.interaction}>
          <FontAwesomeIcon
            icon={faHeart}
            size={20}
            style={style.interactionIcon}
          />
          <Text style={style.interactionCount}>{props.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.interaction}>
          <FontAwesomeIcon
            icon={faCommentDots}
            size={20}
            style={style.interactionIcon}
          />
          <Text style={style.interactionCount}>{props.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.interaction}>
          <FontAwesomeIcon
            icon={faBookmark}
            size={20}
            style={style.interactionIcon}
          />
          <Text style={style.interactionCount}>{props.bookmarks}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
