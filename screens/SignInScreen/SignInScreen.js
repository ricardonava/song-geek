import * as AuthSession from 'expo-auth-session';
import React from 'react';
import { Button, Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import AuthContext from '../../utils/authContext';

const Container = styled(Surface)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

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
    <Container>
      <Button mode="contained" onPress={() => signIn(promptAsync)}>
        Login
      </Button>
    </Container>
  );
};

export default SignInScreen;
