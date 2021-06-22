import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../../theme/colors'

export default function SimpleViewScreen() {
  return (
    <View style={styles.container}>
      <Text>Simple View Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center'
  }
})
