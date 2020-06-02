import React from 'react';
import { View } from 'react-native';
import SongList from './SongList';

function HomeScreen({ navigation }) {
  return (
    <View>
      <SongList navigation={navigation} />
    </View>
  );
}

export default HomeScreen;
