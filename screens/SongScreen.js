import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Subheading, Headline, Text } from 'react-native-paper';

import song from '../song.json';

const styles = StyleSheet.create({
  container: { flex: 1 },
  trackNameContainer: {
    flexDirection: 'row'
  }
});

const SongScreen = () => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { artists, duration_ms: duration, id, name, popularity } = song;
  return (
    <View style={styles.container}>
      <Subheading>TRACK</Subheading>
      <View style={styles.trackNameContainer}>
        <Headline>{name} </Headline>
        <Headline>ORIGINAL MIX</Headline>
      </View>
      <View style={styles.trackNameContainer}>
        <Subheading>ARTISTS</Subheading>
        {artists.map((artist) => (
          <Text key={artist.id}>{artist.name}, </Text>
        ))}
      </View>
    </View>
  );
};

export default SongScreen;
