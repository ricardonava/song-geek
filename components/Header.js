import { PropTypes } from 'prop-types';
import React from 'react';
import { Appbar } from 'react-native-paper';

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

const SongHeader = ({ goBack, previous, navigate }) =>
  previous ? (
    <Appbar.BackAction onPress={goBack} />
  ) : (
    <Appbar.Action icon="home" onPress={() => navigate('Home')} />
  );

const Header = ({ scene, previous, navigation }) => {
  const { goBack, navigate } = navigation;
  const { options } = scene.descriptor;
  const { name } = scene.route;
  const title = setTitle(options, scene);

  return (
    <Appbar.Header>
      {name !== 'Home' && (
        <SongHeader goBack={goBack} previous={previous} navigate={navigate} />
      )}
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
