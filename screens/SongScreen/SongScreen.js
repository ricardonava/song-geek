import * as SecureStore from 'expo-secure-store';

import React, { useEffect, useState } from 'react';
import { Surface, Subheading } from 'react-native-paper';
import styled from 'styled-components/native';
import song from '../../song.json';
import Artists from './Artists';
import TrackInfo from './TrackInfo';
import TrackName from './TrackName';
import search from '../../utils/searchSongInfo';

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

async function fetchSongInfo(setSongInfo, id) {
  const token = JSON.stringify(await SecureStore.getItemAsync('userToken'));
  const songInfo = await search({ token, id });
  setSongInfo(songInfo);
}

const SongScreen = ({ route }) => {
  const [songInfo, setSongInfo] = useState(undefined);
  const { duration_ms: duration, popularity } = song;
  const { name, artists, cover, id, releaseDate } = route.params;

  useEffect(() => {
    fetchSongInfo(setSongInfo, id);
  }, []);

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
          releaseDate={releaseDate}
          cover={cover}
          id={id}
          popularity={popularity}
          songInfo={songInfo}
        />
      </Section>
    </Container>
  );
};

export default SongScreen;
