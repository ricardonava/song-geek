import React from 'react';
import { Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import song from '../../song.json';
import msToTime from '../../utils/msToTime';
import Artists from './Artists';
import TrackInfo from './TrackInfo';
import TrackName from './TrackName';

const Container = styled(Surface)`
  flex: 1;
  padding: 5px;
`;

const SongScreen = ({ route }) => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { duration_ms: duration, popularity } = song;
  const { name, artists, cover, id } = route.params;

  const timeFormat = msToTime(duration);
  return (
    <Container>
      <TrackName name={name} />
      <Artists artists={artists} />
      <TrackInfo
        albumName={albumName}
        releaseDate={releaseDate}
        cover={cover}
        id={id}
        popularity={popularity}
        duration={timeFormat}
      />
    </Container>
  );
};

export default SongScreen;
