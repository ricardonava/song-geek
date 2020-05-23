import { PropTypes } from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  trackName: { flexDirection: 'row', flexWrap: 'wrap' }
});

const Container = styled.View`
  padding: 10px;
`;

const Name = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const TrackName = ({ name }) => {
  return (
    <Container>
      <Subheading>TRACK </Subheading>
      <Name style={styles.trackName}>
        <Headline>{name} </Headline>
      </Name>
    </Container>
  );
};

TrackName.propTypes = {
  name: PropTypes.string.isRequired
};

export default TrackName;
