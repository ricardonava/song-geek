import { PropTypes } from 'prop-types';
import React from 'react';
import { Button } from 'react-native';
import { Surface } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled(Surface)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Button
        title="Go to Song"
        onPress={() => navigation && navigation.push('Song')}
      />
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
