import React from 'react';
import { Image } from 'react-native';
import { List } from 'react-native-paper';
import styled from 'styled-components/native';

export const AlbumCover = styled(Image)`
  width: 64px;
  height: 64px;
`;

const Item = React.memo(
  ({ name, artists, cover, navigate, id, releaseDate }) => {
    return (
      <>
        <List.Item
          title={name}
          description={artists[0].name}
          left={() => <AlbumCover source={{ uri: cover[0].url }} />}
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

export default Item;
