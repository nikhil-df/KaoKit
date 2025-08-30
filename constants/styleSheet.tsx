import { StyleSheet } from "react-native";
import { useThemeColors } from "./colors";

export const useAppStyles = () => {
  const colors = useThemeColors();

  return StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.background,
      flex: 1,
    },
    text: {
      color: colors.text,
      fontSize: 20,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      backgroundColor: colors.primary,
    },
    headerText: {
      color: colors.background,
      fontSize: 24,
      fontWeight: "bold",
    },
    headerDropdownContainer: {
      position: "absolute",
      top: 30,
      right: 0,
      width: 150,
      borderRadius: 4,
      paddingVertical: 8,
      shadowColor: colors.background,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
      zIndex: 1000,
      backgroundColor: colors.primary
    },
    headerDropdownItem: {
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    headerDropdownText: {
      color: colors.background
    },
    cardBox: {
      backgroundColor: colors.background,
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
      shadowColor: colors.primary,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    cardKaomoji: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 4,
      color: colors.text,
    },
    cardSubcategory: {
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
      color: colors.text,
      marginBottom: 6,
    },
    CardCategories: {
      fontSize: 12,
      textAlign: 'center',
      color: colors.text,
    },
  });
};
