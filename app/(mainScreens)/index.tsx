import Card, { RawKaomojiItem } from "@/components/card";
import Header from "@/components/header";
import { useAppStyles } from "@/constants/styleSheet";
import { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import kaomojiRaw from '../../data/kaomoji.json';

export default function Index() {
  const styles = useAppStyles();
  const [data, setData] = useState<RawKaomojiItem[]>([]);

  useEffect(() => {
    try {
      setData(kaomojiRaw as RawKaomojiItem[]);
    } catch {
      Alert.alert('Could not load kaomoji');
    }
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {data.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}