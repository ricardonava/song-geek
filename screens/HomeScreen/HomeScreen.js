import React, { useState } from 'react';
import { Surface } from 'react-native-paper';
import styled from 'styled-components/native';
// import * as SecureStore from 'expo-secure-store';

import LikedSongs from './LikedSongs';
import Login from './Login';

const Container = styled(Surface)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// async function hasLocalToken() {
//   const localToken = await SecureStore.getItemAsync('token');
//   if (localToken === null) {

//   } else {

//   }

// }

const HomeScreen = () => {
  const [token, setToken] = useState(undefined);
  return (
    <Container>
      {!token ? <Login setToken={setToken} /> : <LikedSongs token={token} />}
    </Container>
  );
};

export default HomeScreen;
