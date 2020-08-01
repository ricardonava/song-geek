import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SplashScreen = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <ActivityIndicator color={colors.primary} size="large" />
    </Container>
  );
};

export default SplashScreen;
