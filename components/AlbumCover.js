import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 300,
    height: 300
  }
});

const AlbumCover = ({ images }) => {
  return (
    <Surface>
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
