import * as AuthSession from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';
// import useCachedResources from './hooks/useCachedResources';
import { RootNavigator } from './navigation/rootNavigator';
import AuthContext from './utils/authContext';
import getToken from './utils/getToken';

const redirect = AuthSession.makeRedirectUri({ useProxy: true });

WebBrowser.maybeCompleteAuthSession();

const Container = styled.View`
  flex: 1;
`;

const theme = {
  ...DarkTheme,
  mode: 'adaptive'
};

export default function App() {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // }

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        console.log(`No LOCAL TOKEN found: ${userToken}`);
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (promptAsync) => {
        const { access_token: accesToken } = await getToken(
          promptAsync,
          redirect
        );
        await SecureStore.setItemAsync('userToken', accesToken);
        dispatch({ type: 'SIGN_IN', token: 'token' });
      },
      signOut: async () => {
        await SecureStore.deleteItemAsync('userToken');
        dispatch({ type: 'SIGN_OUT' });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
        <Container>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <RootNavigator state={state} />
        </Container>
      </PaperProvider>
    </AuthContext.Provider>
  );
}
