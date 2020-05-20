import React from 'react';
import { View } from 'react-native';
import AlbumCover from '../components/AlbumCover';
import song from '../song.json';
import SongInfo from '../components/SongInfo';

const SongScreen = () => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { artists, duration_ms: duration, id, name, popularity } = song;
  return (
    <View>
      <AlbumCover images={images} />
      {/* <SongInfo /> */}
    </View>
  );
};

export default SongScreen;
