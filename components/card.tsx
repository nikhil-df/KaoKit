// components/KaomojiCard.tsx
import { useAppStyles } from '@/constants/styleSheet';
import React from 'react';
import { Text, View } from 'react-native';

export interface RawKaomojiItem {
  kaomoji: string;
  subcategory: string;
  category: string
}

interface KaomojiCardProps {
  item: RawKaomojiItem;
}


export default function Card({ item }: KaomojiCardProps) {
  const styles = useAppStyles()
  return (
    <View style={styles.cardBox}>
      <Text style={styles.cardKaomoji}>{item.kaomoji}</Text>
      <Text style={styles.cardSubcategory}>{item.subcategory}</Text>
      <Text style={styles.CardCategories}>
        {item.category}
      </Text>
    </View>
  );
}

