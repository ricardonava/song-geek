import * as SecureStore from 'expo-secure-store';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { ActivityIndicator, Divider, List, Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import search from '../../utils/search';

const Container = styled(Surface)`
  width: 100%;
`;

const AlbumCover = styled(Image)`
  width: 64px;
  height: 64px;
`;

async function fetchSongs(setSongs) {
  const token = JSON.stringify(await SecureStore.getItemAsync('userToken'));
  const songs = await search({ token });
  setSongs(songs);
}

const Item = ({ name, artists, cover }) => {
  return (
    <>
      <List.Item
        title={name}
        description={artists[0].name}
        left={() => <AlbumCover source={{ uri: cover[0].url }} />}
        // eslint-disable-next-line react/jsx-props-no-spreading
        right={(props) => <List.Icon {...props} icon="dots-vertical" />}
        onPress={() => console.log('pressed')}
      />
      <Divider />
    </>
  );
};

const SongList = () => {
  const [songs, setSongs] = useState(undefined);

  useEffect(() => {
    fetchSongs(setSongs);
  }, []);

  return (
    <>
      {!songs ? (
        <ActivityIndicator />
      ) : (
        <Container>
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <Item
                name={item.name}
                artists={item.artists}
                cover={item.cover}
                id={item.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </Container>
      )}
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  cover: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired
};

export default SongList;
