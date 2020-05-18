import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import useCachedResources from './hooks/useCachedResources';
import { RootNavigator } from './navigation/rootNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  }
});

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
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <RootNavigator />
      </View>
    </PaperProvider>
  );
}
