import * as SecureStore from 'expo-secure-store';
import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Subheading, Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import search from '../../utils/searchSongInfo';
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

async function fetchSongInfo(setSongInfo, id) {
  const token = JSON.stringify(await SecureStore.getItemAsync('userToken'));
  const songInfo = await search({ token, id });
  setSongInfo(songInfo);
}

const SongScreen = ({ route }) => {
  const [songInfo, setSongInfo] = useState(undefined);
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
          songInfo={songInfo}
        />
      </Section>
    </Container>
  );
};

SongScreen.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired
};

export default SongScreen;
