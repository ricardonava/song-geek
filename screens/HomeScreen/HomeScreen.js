import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import styled from 'styled-components/native';
import getToken from '../../utilities/getAuthCode';
import Login from './Login';

const Container = styled(Surface)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const authWithSpotify = async (setToken) => {
  const result = await getToken();
  // const songs = await search({ token: result });
  setToken(result);
};

const HomeScreen = ({ navigation }) => {
  const [token, setToken] = useState(undefined);
  return (
    <Container>
      {!token ? <Login setToken={setToken} /> : <Text>Logged In</Text>}
    </Container>
  );
};

HomeScreen.defaultProps = {
  navigation: undefined
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func)
};

export default HomeScreen;
