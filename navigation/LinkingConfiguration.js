import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'home',
      screens: {
        Home: 'Home',
        Song: 'Song'
      }
    }
  }
};
