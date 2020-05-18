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

const Header = ({ scene, previous, navigation }) => {
  const { goBack } = navigation;
  const { options } = scene.descriptor;

  const title = setTitle(options, scene);

  return (
    <Appbar.Header>
      {previous && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

Header.defaultProps = {
  previous: undefined
};

Header.propTypes = {
  scene: PropTypes.objectOf(Object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  previous: PropTypes.objectOf(Object)
};

export default Header;
