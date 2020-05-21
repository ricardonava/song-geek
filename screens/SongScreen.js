import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Subheading, Headline, Title, Text } from 'react-native-paper';

import AlbumCover from '../components/AlbumCover';

import song from '../song.json';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  trackNameContainer: { backgroundColor: '#00aca1' },
  artistsContainer: { backgroundColor: '#f7c9cf', flexDirection: 'row' },
  trackInfo: { backgroundColor: '#8b7e66', flexDirection: 'row' },
  trackName: { flexDirection: 'row' },
  trackNameColumns: { width: '50%' }
});

function msToTime(s) {
  // Pad to 2 or 3 digits, default is 2
  const pad = (n, z = 2) => `00${n}`.slice(-z);
  return `${pad((s / 3.6e6) | 0)}:${pad(((s % 3.6e6) / 6e4) | 0)}:${pad(
    ((s % 6e4) / 1000) | 0
  )}.${pad(s % 1000, 3)}`;
}

const SongScreen = () => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { artists, duration_ms: duration, id, name, popularity } = song;
  const durationTime = msToTime(duration);
  return (
    <View style={styles.container}>
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
      <View style={styles.trackInfo}>
        <View style={styles.trackNameColumns}>
          <Subheading>RELEASE </Subheading>
          <AlbumCover images={images} />
        </View>
        <View style={styles.trackNameColumns}>
          <Subheading>LENGTH </Subheading>
          <Text>{durationTime} </Text>
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
    </View>
  );
};

export default SongScreen;
