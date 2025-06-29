import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const AuthContext = createContext<{
  signIn: (arg0: string) => void;
  signOut: () => void
  token: string | null
  isLoading: boolean
}>({
  signIn: () => null,
  signOut: () => null,
  token: null,
  isLoading: true,
});

// This hook can be used to access the user info.
export function useAuthSession() {
  return useContext(AuthContext);
}

export default function AuthProvider  ({children}) {
  const tokenRef = useRef<string|null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@token');
      tokenRef.current = token || '';
      setIsLoading(false);
    })()
  }, []);

  const signIn = useCallback(async (token: string) => {
    await AsyncStorage.setItem('@token', token);
    tokenRef.current = token;
    router.replace('/')
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.setItem('@token', '');
    tokenRef.current = null;
    router.replace('/login');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token: tokenRef,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};