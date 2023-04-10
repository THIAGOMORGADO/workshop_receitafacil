import 'react-native-reanimated'
import 'react-native-gesture-handler'
import React from 'react';
import {Routes} from './src/Routes';
import {useColorScheme} from 'react-native'

import { ThemeProvider } from 'styled-components'
import themes from './src/themes'

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark

  return(
  <ThemeProvider theme={theme}>
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  </ThemeProvider>  
    
  )
}