import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import UserProfileImage from '../../components/UserProfileImage/UserProfileImage';
import ProfileStat from '../../components/ProfileStat/ProfileStat';
import {horizontalScale} from '../../assets/styles/scaling';
import style from './style';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <UserProfileImage
            profileImage={require('../../assets/images/default_profile.png')}
            imageDimensions={horizontalScale(110)}
          />
        </View>
        <Text style={style.userName}>Emmanuel Robertsen</Text>
        <View style={style.profileStats}>
          <ProfileStat stat="45" statType="Following" />
          <View style={style.verticalDivider} />
          <ProfileStat stat="30M" statType="Followers" />
          <View style={style.verticalDivider} />
          <ProfileStat stat="100" statType="Posts" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
