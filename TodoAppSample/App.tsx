/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';
import Navigation from './src/Navigaton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import configureStore from './src/Store';

Icon.loadFont();

const store = configureStore();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    flex: 1,
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={backgroundStyle} edges={['top', 'left', 'right']}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
