import { createStackNavigator } from '@react-navigation/stack';
import { PropTypes } from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import SongScreen from '../screens/SongScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        )
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Homes' }}
      />
      <Stack.Screen
        name="Song"
        component={SongScreen}
        options={{ headerTitle: 'Song' }}
      />
    </Stack.Navigator>
  );
};

StackNav.defaultProps = {
  previous: undefined
};

StackNav.propTypes = {
  scene: PropTypes.objectOf(Object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  previous: PropTypes.objectOf(Object)
};

export default StackNav;
