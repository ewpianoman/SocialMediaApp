import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Routes} from '../../navigation/Routes';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>Welcome to the Profle Page</Text>
    </SafeAreaView>
  );
};

export default Profile;
