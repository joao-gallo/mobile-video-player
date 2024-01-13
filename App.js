import * as React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Video from './src/Components/Video';
import VideoComponent from './src/Components/Video';
import Home from './src/Pages/Home';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
