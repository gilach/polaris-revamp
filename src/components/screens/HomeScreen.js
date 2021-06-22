import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

import NearFormLogo from '../../images/NearFormLogo'
import colors from '../../theme/colors'
import { TNavigation } from '../../prop-types'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NearFormLogo
        style={styles.logo}
        fill={colors.primary}
        title="NearForm"
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to simple view"
        onPress={() => navigation.push('SimpleView')}
      ></Button>
    </View>
  )
}

HomeScreen.propTypes = {
  navigation: TNavigation.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center'
  },
  logo: { height: 50, width: 200 }
})
