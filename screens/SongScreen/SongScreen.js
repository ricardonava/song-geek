import React from 'react';
import { Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import song from '../../song.json';
import msToTime from '../../utilities/msToTime';
import Artists from './containers/Artists';
import TrackInfo from './containers/TrackInfo';
import TrackName from './containers/TrackName';

const Container = styled(Surface)`
  flex: 1;
  padding: 5px;
`;

const SongScreen = () => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { artists, duration_ms: duration, id, name, popularity } = song;
  const timeFormat = msToTime(duration);
  return (
    <Container>
      <TrackName name={name} />
      <Artists artists={artists} />
      <TrackInfo
        albumName={albumName}
        releaseDate={releaseDate}
        images={images}
        id={id}
        popularity={popularity}
        duration={timeFormat}
      />
    </Container>
  );
};

export default SongScreen;
