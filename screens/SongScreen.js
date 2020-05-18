import React from 'react';
import { View, Text } from 'react-native';

import song from '../song.json';

const SongScreen = () => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { artists, duration_ms: duration, id, name, popularity } = song;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SongScreen</Text>
    </View>
  );
};

export default SongScreen;
