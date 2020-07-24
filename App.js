/* eslint-disable default-case */
import * as AuthSession from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import useAuthStateReducer from './hooks/useAuthStateReducer';
import { RootNavigator } from './navigation/rootNavigator';
import AuthContext from './utils/authContext';
import getRefreshToken from './utils/getRefreshToken';
import getToken from './utils/getToken';
import { authUrl } from './utils/secrets';

const redirect = AuthSession.makeRedirectUri({ useProxy: true });

WebBrowser.maybeCompleteAuthSession();

const theme = {
  ...DarkTheme,
  mode: 'adaptive'
};

async function bootstrapAsync(dispatch) {
  const refreshToken = await SecureStore.getItemAsync('refreshToken');

  if (refreshToken !== null) {
    const { access_token: newToken } = await getRefreshToken(refreshToken);
    const token = newToken;
    dispatch({ type: 'RESTORE_TOKEN', payload: { token } });
    console.log('NEW TOKEN ' + newToken);
  } else {
    const token = await SecureStore.getItemAsync('userToken');
    dispatch({ type: 'RESTORE_TOKEN', payload: { token } });
    console.log('TOKEN ' + token);
  }
}

export default function App() {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // }

  const [state, dispatch] = useAuthStateReducer();

  React.useEffect(() => {
    bootstrapAsync(dispatch);
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        const {
          params: { code }
        } = await AuthSession.startAsync({
          authUrl
        });
        const {
          access_token: token,
          refresh_token: refreshToken
        } = await getToken(code, redirect);
        await SecureStore.setItemAsync('userToken', token);
        await SecureStore.setItemAsync('refreshToken', refreshToken);

        dispatch({ type: 'SIGN_IN', payload: { token } });
      },

      signOut: async () => {
        await SecureStore.deleteItemAsync('userToken');
        await SecureStore.deleteItemAsync('refreshToken');

        dispatch({ type: 'SIGN_OUT' });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <RootNavigator state={state} />
      </PaperProvider>
    </AuthContext.Provider>
  );
}
