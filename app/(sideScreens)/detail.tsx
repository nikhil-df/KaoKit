import { useAppStyles } from "@/constants/styleSheet";
import { Text, View } from "react-native";

export default function Details() {
  const styles = useAppStyles();
  return (
    <View
    >
      <Text style={styles.text}>favorite</Text>
    </View>
  );
}
