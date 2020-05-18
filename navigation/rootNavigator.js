import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'react-native-paper';
import FeedStack from './stack';

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <FeedStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
