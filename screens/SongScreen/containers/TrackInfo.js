import { PropTypes } from 'prop-types';
import React from 'react';
import { Subheading, Text } from 'react-native-paper';
import styled from 'styled-components/native';
import AlbumCover from '../../../components/AlbumCover';

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const Column = styled.View`
  width: 50%;
`;

const TrackName = ({
  cover,
  duration,
  releaseDate,
  popularity,
  id,
  albumName
}) => {
  return (
    <Container>
      <Column>
        <Subheading>RELEASE </Subheading>
        <AlbumCover cover={cover} />
      </Column>
      <Column>
        <Subheading>LENGTH </Subheading>
        <Text>{duration} </Text>
        <Subheading>RELEASED </Subheading>
        <Text>{releaseDate} </Text>
        <Subheading>BPM </Subheading>
        <Text>{popularity} </Text>
        <Subheading>KEY </Subheading>
        <Text>{id[0]} </Text>
        <Subheading>GENRE </Subheading>
        <Text>{id} </Text>
        <Subheading>LABEL </Subheading>
        <Text>{albumName} </Text>
      </Column>
    </Container>
  );
};

TrackName.propTypes = {
  cover: PropTypes.arrayOf(Object).isRequired,
  duration: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired
};

export default TrackName;
