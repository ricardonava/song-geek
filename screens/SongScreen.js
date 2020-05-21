import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Subheading, Text, Title, Surface } from 'react-native-paper';
import AlbumCover from '../components/AlbumCover';
import song from '../song.json';
import msToTime from '../utilities/msToTime';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  trackNameContainer: { padding: 10 },
  artistsContainer: {
    flexDirection: 'row',
    padding: 10
  },
  trackInfoContainer: {
    flexDirection: 'row',
    padding: 10
  },
  trackName: { flexDirection: 'row', flexWrap: 'wrap' },
  trackNameColumns: { width: '50%' }
});

const SongScreen = () => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { artists, duration_ms: duration, id, name, popularity } = song;
  const timeFormat = msToTime(duration);
  return (
    <Surface style={styles.container}>
      <View style={styles.trackNameContainer}>
        <Subheading>TRACK </Subheading>
        <View style={styles.trackName}>
          <Headline>{name} </Headline>
          <Title>({albumName}) </Title>
        </View>
      </View>
      <View style={styles.artistsContainer}>
        <Subheading>ARTISTS </Subheading>
        {artists.map((artist) => (
          <Text key={artist.id}>{artist.name} </Text>
        ))}
      </View>
      <View style={styles.trackInfoContainer}>
        <View style={styles.trackNameColumns}>
          <Subheading>RELEASE </Subheading>
          <AlbumCover images={images} />
        </View>
        <View style={styles.trackNameColumns}>
          <Subheading>LENGTH </Subheading>
          <Text>{timeFormat} </Text>
          <Subheading>RELEASED </Subheading>
          <Text>{releaseDate} </Text>
          <Subheading>BPM </Subheading>
          <Text>{popularity} </Text>
          <Subheading>KEY </Subheading>
          <Text>{id[0]} </Text>
          <Subheading>GENRE </Subheading>
          <Text>{id} </Text>
          <Subheading>LABEL </Subheading>
          <Text>{albumName} </Text>
        </View>
      </View>
    </Surface>
  );
};

export default SongScreen;
