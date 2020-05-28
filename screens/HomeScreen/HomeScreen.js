import React, { useState } from 'react';
import { Surface } from 'react-native-paper';
import styled from 'styled-components/native';
import LikedSongs from './LikedSongs';
import Login from './Login';

const Container = styled(Surface)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeScreen = ({ navigation }) => {
  const [token, setToken] = useState(undefined);
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
