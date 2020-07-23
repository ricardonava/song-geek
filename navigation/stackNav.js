/* eslint-disable react/no-unused-prop-types */
import { createStackNavigator } from '@react-navigation/stack';
import { PropTypes } from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SongScreen from '../screens/SongScreen/SongScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

const StackNav = ({ state }) => {
  let screen;
  if (state.isLoading) {
    screen = (
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          title: 'Song Geek'
        }}
      />
    );
  } else {
    screen =
      state.userToken == null ? (
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign In',
            animationTypeForReplace: state.isSignout ? 'pop' : 'push'
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Song Geek'
            }}
          />
          <Stack.Screen
            name="Song"
            component={SongScreen}
            options={{
              title: 'Song'
            }}
          />
        </>
      );
  }
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
      {screen}
    </Stack.Navigator>
  );
};

StackNav.defaultProps = {
  previous: undefined,
  scene: undefined,
  navigation: undefined
};

StackNav.propTypes = {
  scene: PropTypes.objectOf(Object),
  navigation: PropTypes.objectOf(PropTypes.func),
  previous: PropTypes.objectOf(Object),
  state: PropTypes.objectOf(PropTypes.any).isRequired
};

export default StackNav;
