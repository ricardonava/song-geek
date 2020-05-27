import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { List, Divider } from 'react-native-paper';
import PropTypes from 'prop-types';

import DATA from './TRACKS.json';

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64
  }
});

const Item = ({ name, artist, cover }) => {
  return (
    <>
      <List.Item
        title={name}
        description={artist}
        left={() => <Image style={styles.logo} source={{ uri: cover }} />}
        // eslint-disable-next-line react/jsx-props-no-spreading
        right={(props) => <List.Icon {...props} icon="dots-vertical" />}
        onPress={() => console.log('Pressed Track')}
      />
      <Divider />
    </>
  );
};

const LikedSongs = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Item name={item.name} artist={item.artist} cover={item.cover} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default LikedSongs;
