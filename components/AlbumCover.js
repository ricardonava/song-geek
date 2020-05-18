import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

const styles = StyleSheet.create({
  logo: {
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
          uri: images[1]
        }}
      />
    </Surface>
  );
};

export default AlbumCover;
