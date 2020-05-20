import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300
  },
  surface: {
    alignSelf: 'center',
    width: 320,
    height: 320,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AlbumCover = ({ images }) => {
  return (
    <Surface style={styles.surface}>
      <Image
        style={styles.logo}
        source={{
          uri: images[1].url
        }}
      />
    </Surface>
  );
};

AlbumCover.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired
};

export default AlbumCover;
