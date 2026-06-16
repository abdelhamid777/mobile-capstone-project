import React from 'react';
import { View, Text, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Item One' },
  { id: '2', title: 'Item Two' },
  { id: '3', title: 'Item Three' }
];

export default function HomeScreen() {
  return (
    <View>
      <Text>Application Home</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
}
