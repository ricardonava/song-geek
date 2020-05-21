import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from 'react-native';
import { Surface } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <Surface
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Button
        title="Go to Song"
        onPress={() => navigation && navigation.push('Song')}
      />
    </Surface>
  );
};

HomeScreen.defaultProps = {
  navigation: undefined
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func)
};

export default HomeScreen;
