import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import 'react-native-reanimated';
import AuthProvider from './providers/AuthProvider';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
