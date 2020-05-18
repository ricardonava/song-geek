import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58
  }
});

const AlbumCover = () => {
  return (
    <Surface>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
    </Surface>
  );
};

export default AlbumCover;
