import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CategoriesScreen } from './screens/category/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { MealsOverviewScreen } from './screens/meals/MealsOverviewScreen'
import { RootStack } from './routes/route-config'

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: 'Meals Categories' }}
          />
          <RootStack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ title: 'Meals Overview', headerBackTitle: 'Back' }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
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
