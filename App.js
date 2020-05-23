import * as React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';
import useCachedResources from './hooks/useCachedResources';
import { RootNavigator } from './navigation/rootNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const Container = styled.View`
  flex: 1;
`;

const theme = {
  ...DarkTheme,
  mode: 'adaptive'
};

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <PaperProvider theme={theme}>
      <Container>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <RootNavigator />
      </Container>
    </PaperProvider>
  );
}
