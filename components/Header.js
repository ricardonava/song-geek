import { PropTypes } from 'prop-types';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    elevation: 5
  }
});

function setTitle(options, scene) {
  let title = '';
  if (options.headerTitle !== undefined) {
    title = options.headerTitle;
  } else if (options.title !== undefined) {
    title = options.title;
  } else {
    title = scene.route.name;
  }
  return title;
}

const Header = ({ scene, previous, navigation }) => {
  const { goBack, navigate } = navigation;
  const { options } = scene.descriptor;
  const { name } = scene.route;
  const title = setTitle(options, scene);

  return (
    <Appbar.Header style={styles.header}>
      {name !== 'Home' &&
        (previous ? (
          <Appbar.BackAction onPress={goBack} />
        ) : (
          <Appbar.Action icon="home" onPress={() => navigate('Home')} />
        ))}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

Header.defaultProps = {
  previous: undefined,
  scene: undefined,
  navigation: undefined
};

Header.propTypes = {
  scene: PropTypes.objectOf(Object),
  navigation: PropTypes.objectOf(PropTypes.func),
  previous: PropTypes.objectOf(Object)
};

export default Header;
