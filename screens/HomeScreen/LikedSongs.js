import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { ActivityIndicator, Divider, List, Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import search from '../../utilities/search';

const Container = styled(Surface)`
  width: 100%;
`;

const AlbumCover = styled(Image)`
  width: 64px;
  height: 64px;
`;

async function fetchSongs(setSongs, token) {
  const songs = await search({ token });
  setSongs(songs);
}

const Item = ({ name, artist, cover }) => {
  return (
    <>
      <List.Item
        title={name}
        description={artist}
        left={() => <AlbumCover source={{ uri: cover }} />}
        // eslint-disable-next-line react/jsx-props-no-spreading
        right={(props) => <List.Icon {...props} icon="dots-vertical" />}
        onPress={() => console.log('Pressed Track')}
      />
      <Divider />
    </>
  );
};

const LikedSongs = ({ token }) => {
  const [songs, setSongs] = useState(undefined);

  useEffect(() => {
    fetchSongs(setSongs, token);
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
              <Item name={item.name} artist={item.artist} cover={item.cover} />
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
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

LikedSongs.propTypes = {
  token: PropTypes.string.isRequired
};

export default LikedSongs;
