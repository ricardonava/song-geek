import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150
  }
});

const AlbumCover = ({ images }) => {
  return (
    <Image
      style={styles.logo}
      source={{
        uri: images[1].url
      }}
    />
  );
};

AlbumCover.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired
};

export default AlbumCover;
