import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { PropTypes } from 'prop-types';

const Header = ({ scene, previous, navigation }) => {
  const theme = useTheme();
  const { goBack } = navigation;

  return (
    <Appbar.Header>
      {previous && (
        <Appbar.BackAction onPress={goBack} color={theme.colors.primary} />
      )}
    </Appbar.Header>
  );
};

Header.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired
};

export default Header;
