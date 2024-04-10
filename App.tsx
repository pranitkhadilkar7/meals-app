import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CategoriesScreen } from './screens/category/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { MealsOverviewScreen } from './screens/meal-overview/MealsOverviewScreen'
import { RootStack } from './routes/route-config'
import { MealDetailsScreen } from './screens/meal-details/MealDetailsScreen'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          <RootStack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <RootStack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ headerBackTitle: 'Back' }}
          />
          <RootStack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
            options={{ title: 'Meal' }}
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
