import React from 'react';
import { Surface, Subheading } from 'react-native-paper';
import styled from 'styled-components/native';
import song from '../../song.json';
import msToTime from '../../utils/msToTime';
import Artists from './Artists';
import TrackInfo from './TrackInfo';
import TrackName from './TrackName';

const Container = styled(Surface)`
  flex: 1;
  elevation: 0;
  padding: 10px;
`;

const Section = styled(Surface)`
  elevation: 5;
  margin-top: 10px;
  border-radius: 5px;
`;

const SongScreen = ({ route }) => {
  const { name: albumName, release_date: releaseDate, images } = song.album;
  const { duration_ms: duration, popularity } = song;
  const { name, artists, cover, id } = route.params;

  const timeFormat = msToTime(duration);
  return (
    <Container>
      <Subheading>Song Information</Subheading>
      <Section>
        <TrackName name={name} />
      </Section>
      <Section>
        <Artists artists={artists} />
      </Section>
      <Section>
        <TrackInfo
          albumName={albumName}
          releaseDate={releaseDate}
          cover={cover}
          id={id}
          popularity={popularity}
          duration={timeFormat}
        />
      </Section>
    </Container>
  );
};

export default SongScreen;
