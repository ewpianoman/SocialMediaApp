import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import style from './assets/styles/main';
import Title from './components/Title/Title';
import MessageButton from './components/MessageButton/MessageButton';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.header}>
          <Title title={"Let's Explore"} />
          <MessageButton messageCount={2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
