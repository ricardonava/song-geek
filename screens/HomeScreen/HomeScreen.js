import React from 'react';
import { Button, View } from 'react-native';
import AuthContext from '../../utils/authContext';
import SongList from './SongList';

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Button title="Sign out" onPress={signOut} />
      <SongList />
    </View>
  );
}

export default HomeScreen;
