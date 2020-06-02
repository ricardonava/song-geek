import React from 'react';
import { Button, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import AuthContext from '../../utils/authContext';

const redirect = AuthSession.makeRedirectUri({ useProxy: true });

const SignInScreen = () => {
  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token'
  };
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: 'f28d5216d2ff4152abe93aba6c2692ab',
      clientSecret: 'f6a17d02d6c74c28b617a8b99fe5b8f1',
      scopes: ['user-library-read'],
      redirectUri: `${redirect}/`,
      usePKCE: false
    },
    discovery
  );

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <Button title="Sign in" onPress={() => signIn(promptAsync)} />
    </View>
  );
};

export default SignInScreen;
