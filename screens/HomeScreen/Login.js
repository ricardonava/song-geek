import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import getToken from '../../utilities/getAuthCode';

const LoginButton = styled(Button)`
  align-self: center;
`;

const authWithSpotify = async (setToken) => {
  const result = await getToken();
  setToken(result);
};

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
