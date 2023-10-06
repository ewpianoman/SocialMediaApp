import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabTitle from '../components/TabTitle/TabTitle';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabNavivation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Photos'}
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle title={'Photos'} isFocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Videos'}
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle title={'Videos'} isFocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Saved'}
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle title={'Saved'} isFocused={focused} />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
