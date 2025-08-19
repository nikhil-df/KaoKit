import { useAppStyles } from "@/constants/styleSheet";
import { Text, View } from "react-native";

export default function Index() {
  const styles = useAppStyles();
  return (
    <View
      style={styles.test}
    >
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
