import { PropTypes } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import SongList from './SongList';

function HomeScreen({ navigation }) {
  return (
    <View>
      <SongList navigation={navigation} />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired
};

export default HomeScreen;
