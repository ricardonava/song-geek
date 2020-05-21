import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const HomeScreen = ({ navigation }) => {
  return (
    <Surface style={styles.container}>
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
