import React, { useState } from 'react';
import { Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import * as SecureStore from 'expo-secure-store';

import LikedSongs from './LikedSongs';
import Login from './Login';

const Container = styled(Surface)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

async function getLocalToken(setToken) {
  const token = await SecureStore.getItemAsync('localToken');
  setToken(token);
}

const HomeScreen = ({ navigation }) => {
  const [token, setToken] = useState(undefined);
  getLocalToken(setToken);
  return (
    <Container>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <LikedSongs token={token} navigation={navigation} />
      )}
    </Container>
  );
};

export default HomeScreen;
