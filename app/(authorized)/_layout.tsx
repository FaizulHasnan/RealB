import { useAuthSession } from "@/app/providers/AuthProvider";
import { Redirect, Stack } from 'expo-router';
import { ReactNode } from "react";
import { Text } from 'react-native';

export default function RootLayout(): ReactNode {
  const {token, isLoading} = useAuthSession()

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!token?.current) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
    //   <StatusBar style="auto" />
  );
}