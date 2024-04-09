import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CategoriesScreen } from './screens/category/CategoriesScreen'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
