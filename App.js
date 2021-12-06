import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Creating a Branch</Text>
    </View>
  )
}
