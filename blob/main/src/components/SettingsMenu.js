import React from 'react';
import { View, Button } from 'react-native';

export default function SettingsMenu() {
  return (
    <View>
      <Button title="Settings" />
      <Button title="Notifications" />
      <Button title="About" />
    </View>
  );
}
