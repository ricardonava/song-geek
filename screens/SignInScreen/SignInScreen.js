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
  return (
    <Container>
      <Button mode="contained" onPress={() => signIn()}>
        Login
      </Button>
    </Container>
  );
};

export default SignInScreen;
