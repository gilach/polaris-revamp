import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider } from 'react-native-paper'
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

import { usePreferences } from '../context/preferences'
import { DarkTheme, DefaultTheme } from '../lib/theme'
import { Screens } from '../lib/const'

import HomeScreen from './screens/HomeScreen'
import SimpleViewScreen from './screens/SimpleViewScreen'
import Header from './Header'

const Stack = createStackNavigator()

const screenOptions = {
  header: Header
}

export default function App() {
  const { isThemeDark } = usePreferences()
  const [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const theme = isThemeDark ? DarkTheme : DefaultTheme

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={Screens.Home} component={HomeScreen} />
          <Stack.Screen
            name={Screens.SimpleView}
            component={SimpleViewScreen}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  )
}
