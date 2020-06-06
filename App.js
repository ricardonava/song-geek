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
import getToken from './utils/getToken';
import authUrl from './utils/secret';

const redirect = AuthSession.makeRedirectUri({ useProxy: true });

WebBrowser.maybeCompleteAuthSession();

const theme = {
  ...DarkTheme,
  mode: 'adaptive'
};

async function bootstrapAsync(dispatch) {
  let token;

  try {
    token = await SecureStore.getItemAsync('userToken');
  } catch (e) {
    console.log(`No LOCAL TOKEN found: ${token}
    Error code: ${e}`);
  }
  dispatch({ type: 'RESTORE_TOKEN', payload: { token } });
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
        const { access_token: token } = await getToken(code, redirect);
        await SecureStore.setItemAsync('userToken', token);
        dispatch({ type: 'SIGN_IN', payload: { token } });
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
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <RootNavigator state={state} />
      </PaperProvider>
    </AuthContext.Provider>
  );
}
