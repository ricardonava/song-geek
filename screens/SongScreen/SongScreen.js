import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import song from '../../song.json';
import msToTime from '../../utilities/msToTime';
import Artists from './containers/Artists';
import TrackInfo from './containers/TrackInfo';
import TrackName from './containers/TrackName';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  }
});

const SongScreen = () => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { artists, duration_ms: duration, id, name, popularity } = song;
  const timeFormat = msToTime(duration);
  return (
    <Surface style={styles.container}>
      <TrackName name={name} />
      <Artists artists={artists} />
      <TrackInfo
        albumName={albumName}
        releaseDate={releaseDate}
        images={images}
        id={id}
        popularity={popularity}
        duration={timeFormat}
      />
    </Surface>
  );
};

export default SongScreen;