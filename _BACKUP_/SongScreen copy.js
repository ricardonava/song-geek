import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Subheading, Headline, Text } from 'react-native-paper';

import song from '../song.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 1681,
    alignSelf: 'center'
  },
  trackNameContainer: {
    flexDirection: 'row'
  },
  trackInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
        <Subheading>ARTISTS </Subheading>
        {artists.map((artist) => (
          <Text key={artist.id}>{artist.name}, </Text>
        ))}
      </View>
      <View style={styles.trackInfoContainer}>
        <View>
          <Subheading>RELEASED </Subheading>
          <Text>{releaseDate} </Text>
        </View>
        <View>
          <Subheading>BPM </Subheading>
          <Text>{popularity} </Text>
        </View>
        <View>
          <Subheading>KEY </Subheading>
          <Text>{id[0]} </Text>
        </View>
        <View>
          <Subheading>GENRE </Subheading>
          <Text>{albumName} </Text>
        </View>
        <View>
          <Subheading>LABEL </Subheading>
          <Text>{duration} </Text>
        </View>
      </View>
    </View>
  );
};

export default SongScreen;
