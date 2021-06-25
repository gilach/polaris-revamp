import merge from 'deepmerge'
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native'
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper'

const theme = {
  colors: {
    primary: '#2165e3'
  },
  spacing: (multiplier = 1) => multiplier * 8
}

export const DefaultTheme = merge.all([
  PaperDefaultTheme,
  NavigationDefaultTheme,
  theme
])
export const DarkTheme = merge.all([PaperDarkTheme, NavigationDarkTheme, theme])
