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

const SongInfo = ({
  name,
  albumName,
  releaseDate,
  artists,
  duration,
  popularity
}) => {
  const durationMin = duration / 60000;
  return (
    <Surface style={styles.surface}>
      <Title>{`Song Name: ${name}`}</Title>
      <Subheading>{`Artist Name: ${artists[0].name}`}</Subheading>
      <Text>{`Album Name: ${albumName}`}</Text>
      <Text>{`Release Date: ${releaseDate}`}</Text>
      <Text>{`Duration: ${durationMin.toFixed(2)}`}</Text>
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
