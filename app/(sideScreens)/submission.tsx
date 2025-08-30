import { useAppStyles } from "@/constants/styleSheet";
import { Text, View } from "react-native";

export default function Settings() {
  const styles = useAppStyles();
  return (
    <View
    >
      <Text style={styles.text}>favorite</Text>
    </View>
  );
}
