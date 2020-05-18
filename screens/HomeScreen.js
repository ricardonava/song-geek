import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title="Go to Details" onPress={() => navigate('Song')} />
    </View>
  );
};

export default HomeScreen;
