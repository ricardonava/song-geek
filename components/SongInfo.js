import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 300,
    height: 300
  }
});

const AlbumCover = () => {
  return (
    <Surface>
      <Text>Song Info</Text>
    </Surface>
  );
};

AlbumCover.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired
};

export default AlbumCover;
