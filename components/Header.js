import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

const Header = ({ scene, previous, navigation }) => {
  const theme = useTheme();

  return (
    <Appbar.Header>
      {previous && (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.primary}
        />
      )}
    </Appbar.Header>
  );
};

export default Header;
