import Header from "@/components/header";
import { useAppStyles } from "@/constants/styleSheet";
import { Text, View } from "react-native";

export default function OwnKao() {
  const styles = useAppStyles();
  return (
    <View
    >
      <Header/>
      <Text style={styles.text}>OwnKao</Text>
    </View>
  );
}
