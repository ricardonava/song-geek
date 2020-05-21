import { PropTypes } from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Subheading, Text } from 'react-native-paper';
import AlbumCover from '../../../components/AlbumCover';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  infoColumns: { width: '50%' }
});

const TrackName = ({
  images,
  duration,
  releaseDate,
  popularity,
  id,
  albumName
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoColumns}>
        <Subheading>RELEASE </Subheading>
        <AlbumCover images={images} />
      </View>
      <View style={styles.infoColumns}>
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
      </View>
    </View>
  );
};

TrackName.propTypes = {
  images: PropTypes.arrayOf(Object).isRequired,
  duration: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired
};

export default TrackName;
