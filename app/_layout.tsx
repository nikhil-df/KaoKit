import { useThemeColors } from '@/constants/colors';
import { Stack } from 'expo-router';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const scheme = useColorScheme();
  const theme = useThemeColors();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 , backgroundColor: theme.primary }}>
        <StatusBar barStyle={scheme === "light" ? "light-content" : "dark-content"} />
        <Stack 
        screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name="(mainScreens)"/>
          <Stack.Screen name="(sideScreens)/detail" />
          <Stack.Screen name="(sideScreens)/search" />
          <Stack.Screen name="(sideScreens)/submission" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}