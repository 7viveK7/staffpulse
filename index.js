import React from 'react';
import {AppRegistry} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';

export default function Main() {
  return (
    <NativeBaseProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
