import { PropTypes } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';

const styles = StyleSheet.create({
  container: { padding: 10 },
  trackName: { flexDirection: 'row', flexWrap: 'wrap' }
});

const TrackName = ({ name }) => {
  return (
    <View style={styles.container}>
      <Subheading>TRACK </Subheading>
      <View style={styles.trackName}>
        <Headline>{name} </Headline>
      </View>
    </View>
  );
};

TrackName.propTypes = {
  name: PropTypes.string.isRequired
};

export default TrackName;
