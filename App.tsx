import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CategoriesScreen } from './screens/category/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { MealsOverviewScreen } from './screens/meal-overview/MealsOverviewScreen'
import { RootDrawer, RootStack } from './routes/route-config'
import { MealDetailsScreen } from './screens/meal-details/MealDetailsScreen'
import { FavouriteMealsScreen } from './screens/favourites/FavouriteMealsScreen'
import { Routes } from './routes/Routes'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Routes />
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
