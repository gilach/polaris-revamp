import React from 'react'
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper'
import T from 'prop-types'

import { TNavigation, TScene } from '../lib/prop-types'
import { usePreferences } from '../context/preferences'

export default function Header({ scene, navigation, previous }) {
  const theme = useTheme()
  const { toggleTheme, isThemeDark } = usePreferences()

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme.colors.surface
        }
      }}
    >
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={scene.route.name} />
      <TouchableRipple onPress={toggleTheme}>
        <Switch value={isThemeDark} />
      </TouchableRipple>
    </Appbar.Header>
  )
}

Header.propTypes = {
  scene: TScene.isRequired,
  navigation: TNavigation.isRequired,
  previous: T.bool.isRequired
}
