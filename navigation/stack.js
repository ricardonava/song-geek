import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import SongScreen from '../screens/SongScreen';

const Stack = createStackNavigator();

const Header = ({ scene, previous, navigation, theme }) => {
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

const FeedStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header
            scene={scene}
            previous={previous}
            navigation={navigation}
            theme={theme}
          />
        )
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <Stack.Screen
        name="Song"
        component={SongScreen}
        options={{ headerTitle: 'Song' }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;
