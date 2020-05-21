import { PropTypes } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Subheading, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  }
});

const TrackName = ({ artists }) => {
  return (
    <View style={styles.container}>
      <Subheading>ARTISTS </Subheading>
      {artists.map((artist) => (
        <Text key={artist.id}>{artist.name} </Text>
      ))}
    </View>
  );
};

TrackName.propTypes = {
  artists: PropTypes.arrayOf(Object).isRequired
};

export default TrackName;
