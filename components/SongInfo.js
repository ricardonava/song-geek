/* eslint-disable no-bitwise */
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Subheading, Surface, Text, Title } from 'react-native-paper';

const styles = StyleSheet.create({
  surface: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function msToTime(s) {
  // Pad to 2 or 3 digits, default is 2
  const pad = (n, z = 2) => `00${n}`.slice(-z);
  return `${pad((s / 3.6e6) | 0)}:${pad(((s % 3.6e6) / 6e4) | 0)}:${pad(
    ((s % 6e4) / 1000) | 0
  )}.${pad(s % 1000, 3)}`;
}

const SongInfo = ({
  name,
  albumName,
  releaseDate,
  artists,
  duration,
  popularity
}) => {
  const durationTime = msToTime(duration);
  return (
    <Surface style={styles.surface}>
      <Title>{`Song Name: ${name}`}</Title>
      <Subheading>{`Artist Name: ${artists[0].name}`}</Subheading>
      <Text>{`Album Name: ${albumName}`}</Text>
      <Text>{`Release Date: ${releaseDate}`}</Text>
      <Text>{`Duration: ${durationTime}`}</Text>
      <Text>{`Popularity: ${popularity}`}</Text>
    </Surface>
  );
};

SongInfo.propTypes = {
  name: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  artists: PropTypes.arrayOf(PropTypes.objectOf).isRequired
};

export default SongInfo;
