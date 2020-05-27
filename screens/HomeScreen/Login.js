import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import getToken from '../../utilities/getAuthCode';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center'
  }
});

const authWithSpotify = async (setToken) => {
  const result = await getToken();
  setToken(result);
};

const Login = ({ setToken }) => {
  return (
    <>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => authWithSpotify(setToken)}
      >
        Login
      </Button>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login;
