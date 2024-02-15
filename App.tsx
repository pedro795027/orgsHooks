import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Home from './src/screens/home';
import Produtores from './src/components/produtores';

function App() {
  return (
    <SafeAreaView >
      <Home />
      <Produtores />
    </SafeAreaView>
  )
}

export default App;