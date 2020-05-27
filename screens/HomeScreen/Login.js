import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import * as SecureStore from 'expo-secure-store';
import getToken from '../../utilities/getAuthCode';

const LoginButton = styled(Button)`
  align-self: center;
`;

async function authWithSpotify(setToken) {
  const token = await getToken();
  await SecureStore.setItemAsync('token', token);
  setToken(token);
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
