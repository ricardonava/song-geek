import { PropTypes } from 'prop-types';
import React from 'react';
import { ActivityIndicator, Subheading, Text } from 'react-native-paper';
import styled from 'styled-components/native';
import AlbumCover from '../../components/AlbumCover';
import msToTime from '../../utils/msToTime';

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const Column = styled.View`
  width: 50%;
`;

const TrackInfo = ({ cover, releaseDate, songInfo }) => {
  return (
    <Container>
      <Column>
        <Subheading>RELEASE </Subheading>
        <AlbumCover cover={cover} />
      </Column>
      <Column>
        {!songInfo ? (
          <ActivityIndicator />
        ) : (
          <>
            <Subheading>LENGTH </Subheading>
            <Text>{msToTime(songInfo.duration_ms)} </Text>
            <Subheading>RELEASED </Subheading>
            <Text>{releaseDate} </Text>
            <Subheading>BPM </Subheading>
            <Text>{songInfo.tempo} </Text>
            <Subheading>KEY </Subheading>
            <Text>
              {songInfo.key} {songInfo.mode}
            </Text>
            <Subheading>LOUDNESS </Subheading>
            <Text>{songInfo.loudness} LUFS </Text>
          </>
        )}
      </Column>
    </Container>
  );
};

TrackInfo.defaultProps = {
  songInfo: undefined
};

TrackInfo.propTypes = {
  cover: PropTypes.arrayOf(Object).isRequired,
  releaseDate: PropTypes.string.isRequired,
  songInfo: PropTypes.objectOf(PropTypes.any)
};

export default TrackInfo;
