import * as SecureStore from 'expo-secure-store';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator, Divider, Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import search from '../../utils/searchLikedSongs';
import Item from './Item';

const LIMIT = 20;

const Container = styled(Surface)`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

async function fetchSongs(setSongs, songs, offset, setOffset) {
  const token = JSON.stringify(await SecureStore.getItemAsync('userToken'));
  const newSongs = await search({ token, LIMIT, offset });

  setSongs([...songs, ...newSongs]);
  setOffset(offset + LIMIT);
}

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

  const renderItem = ({ item }) => {
    const { name, artists, cover, id, releaseDate } = item;
    return (
      <Item
        name={name}
        artists={artists}
        cover={cover}
        id={id}
        navigate={navigate}
        releaseDate={releaseDate}
      />
    );
  };

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
