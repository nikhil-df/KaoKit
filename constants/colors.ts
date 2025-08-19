import { useColorScheme } from "react-native";

const lightColors = {
  background: '#F7E1B5',
  primary: '#151515',
  text: '#151515',
  card: '#FFFFFF',
  accent: '#FFCA6B',
};

const darkColors = {
  background: '#151515',
  primary: '#F7E1B5',
  text: '#F7E1B5',
  card: '#222222',
  accent: '#FFCA6B',
};

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
};
