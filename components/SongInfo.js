import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Title, Subheading, Text } from 'react-native-paper';

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
  id,
  popularity
}) => {
  const durationMin = duration / 60000;
  return (
    <Surface style={styles.surface}>
      <Title>{name}</Title>
      <Subheading>{artists[0].name}</Subheading>
      <Text>{albumName}</Text>
      <Text>{releaseDate}</Text>
      <Text>{durationMin.toFixed(2)}</Text>
      <Text>{popularity}</Text>
    </Surface>
  );
};

SongInfo.propTypes = {
  name: PropTypes.string.isRequired
};

export default SongInfo;
