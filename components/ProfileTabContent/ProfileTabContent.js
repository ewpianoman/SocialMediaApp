import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[globalStyle.backgroundWhite, style.tabContainer]}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
