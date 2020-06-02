import { PropTypes } from 'prop-types';
import React from 'react';
import { Subheading, Text } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const TrackName = ({ artists }) => {
  return (
    <Container>
      <Subheading>ARTISTS </Subheading>
      {artists.map((artist) => (
        <Text key={artist.id}>{artist.name} </Text>
      ))}
    </Container>
  );
};

TrackName.propTypes = {
  artists: PropTypes.arrayOf(Object).isRequired
};

export default TrackName;
