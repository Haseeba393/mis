import React from 'react';
import {
  useColorScheme
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { THEME } from './src/config';
import Root from './src/navigation/Root';

const App = () => {
  
  const scheme = useColorScheme();
  
  return(
    <NavigationContainer
      theme={scheme === 'light' ? THEME.LIGHT_THEME : THEME.DARK_THEME }
    >
      <Root />
    </NavigationContainer>
  );
}

export default App;