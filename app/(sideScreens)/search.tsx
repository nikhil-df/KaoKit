import { useAppStyles } from "@/constants/styleSheet";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Search() {
  const styles = useAppStyles();
  const route = useRouter()
  return (
    <View
    style={styles.mainContainer}
    >
      <Text style={styles.text}>search</Text>
      <TouchableOpacity onPress={route.back}>
        <Text style={styles.text}>back</Text>
        </TouchableOpacity> 
    </View>
  );
}
