import * as SecureStore from 'expo-secure-store';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import getToken from '../../utilities/getTokens';

const LoginButton = styled(Button)`
  align-self: center;
`;

async function authWithSpotify() {
  const responseJson = await getToken();
  const {
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: expiresIn
  } = responseJson;
  const authState = { accessToken, refreshToken, expiresIn };
  console.log(typeof authState.accessToken);
  await SecureStore.setItemAsync('token', JSON.stringify(authState));
}

const Login = ({ setToken }) => {
  return (
    <>
      <LoginButton mode="contained" onPress={() => authWithSpotify(setToken)}>
        Login
      </LoginButton>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;
