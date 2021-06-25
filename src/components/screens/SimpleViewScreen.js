import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
    flex: 1,
    justifyContent: 'center'
  }
})
