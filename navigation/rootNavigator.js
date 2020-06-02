import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'react-native-paper';
import LinkingConfiguration from './LinkingConfiguration';
import StackNav from './stackNav';

export const RootNavigator = ({ state }) => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme} linking={LinkingConfiguration}>
      <StackNav state={state} />
    </NavigationContainer>
  );
};

export default RootNavigator;
