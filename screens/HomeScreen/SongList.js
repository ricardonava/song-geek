import * as SecureStore from 'expo-secure-store';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { ActivityIndicator, Divider, List, Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import search from '../../utils/searchLikedSongs';

const LIMIT = 10;

const Container = styled(Surface)`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const AlbumCover = styled(Image)`
  width: 64px;
  height: 64px;
`;

async function fetchSongs(setSongs, songs, offset, setOffset) {
  const token = JSON.stringify(await SecureStore.getItemAsync('userToken'));
  const newSongs = await search({ token, LIMIT, offset });
  setSongs([...songs, ...newSongs]);

  setOffset(offset + LIMIT);

  console.log(offset);
}

// async function loadNextPage() {
//   const { songs, offset } = useState();
// }

// async function handleEndReached() {
//   await this.loadNextPage();
// }

const Item = React.memo(
  ({ name, artists, cover, navigate, id, releaseDate }) => {
    return (
      <>
        <List.Item
          title={name}
          description={artists[0].name}
          left={() => <AlbumCover source={{ uri: cover[0].url }} />}
          // eslint-disable-next-line react/jsx-props-no-spreading
          onPress={() =>
            navigate('Song', {
              name,
              artists,
              cover,
              id,
              releaseDate
            })
          }
        />
      </>
    );
  }
);

const SongList = ({ navigation }) => {
  const { navigate } = navigation;
  const [songs, setSongs] = useState([]);
  const [offset, setOffset] = useState(0);
  // const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (songs.length === 0) {
      fetchSongs(setSongs, songs, offset, setOffset);
    }
  }, []);

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      artists={item.artists}
      cover={item.cover}
      id={item.id}
      navigate={navigate}
      releaseDate={item.releaseDate}
    />
  );

  return (
    <Container>
      {songs.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReached={() => fetchSongs(setSongs, songs, offset, setOffset)}
          ItemSeparatorComponent={Divider}
          onEndReachedThreshold={0.1}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={20}
          getItemLayout={(data, index) => ({
            length: 80,
            offset: 81 * index,
            index
          })}
        />
      )}
    </Container>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  cover: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  releaseDate: PropTypes.string.isRequired
};

SongList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired
};

export default SongList;
