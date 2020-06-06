import * as AuthSession from 'expo-auth-session';
import authUrl from './secret';

export default async function getAuthorizationCode() {
  await AuthSession.startAsync({
    authUrl
  });
}
