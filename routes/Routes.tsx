import { NavigationContainer } from '@react-navigation/native'
import { RootDrawer, RootStack } from './route-config'
import { CategoriesScreen } from '../screens/category/CategoriesScreen'
import { MealsOverviewScreen } from '../screens/meal-overview/MealsOverviewScreen'
import { MealDetailsScreen } from '../screens/meal-details/MealDetailsScreen'
import { HomeRoutes } from './HomeRoutes'

export function Routes() {
  return (
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
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            title: 'Home',
            headerShown: false,
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
  )
}
