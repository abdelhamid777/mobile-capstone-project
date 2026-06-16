import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';

export default function SettingsScreen() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View>
      <Text>Enable Notifications</Text>

      <Switch
        value={enabled}
        onValueChange={setEnabled}
      />
    </View>
  );
}
