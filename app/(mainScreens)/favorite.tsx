import { useAppStyles } from "@/constants/styleSheet";
import { Text, View } from "react-native";

export default function Favorite() {
  const styles = useAppStyles();
  return (
    <View
      style={styles.test}
    >
      <Text style={styles.text}>favorite</Text>
    </View>
  );
}
