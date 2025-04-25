import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Start your first expo app!</Text>
    </View>
  </SafeAreaView>
  )
}

export default Index