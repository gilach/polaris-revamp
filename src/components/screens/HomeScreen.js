import React from 'react'
import { useTheme } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Text, Button } from 'react-native-paper'

import NearFormLogo from '../../images/NearFormLogo'
import { TNavigation } from '../../lib/prop-types'
import { Screens } from '../../lib/const'

export default function HomeScreen({ navigation }) {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <NearFormLogo
        style={styles.logo}
        fill={theme.colors.primary}
        title="NearForm"
      />
      <Text>{t('Welcome')}</Text>
      <Button
        mode="contained"
        onPress={() => navigation.push(Screens.SimpleView)}
      >
        Go to simple view
      </Button>
    </View>
  )
}

HomeScreen.propTypes = {
  navigation: TNavigation.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  logo: { height: 50, width: 200 }
})
