import { StyleSheet } from "react-native";
import { useThemeColors } from "./colors";

export const useAppStyles = () => {
  const colors = useThemeColors();

  return StyleSheet.create({
    test: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
      fontSize: 20,
    },
  });
};
