import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CategoriesScreen } from '../screens/category/CategoriesScreen'
import { FavouriteMealsScreen } from '../screens/favourites/FavouriteMealsScreen'
import { RootDrawer } from './route-config'
import { RootStackParamList } from './route-type'
import { FontAwesome } from '@expo/vector-icons'

type Props = NativeStackScreenProps<RootStackParamList, 'HomeRoutes'>

export function HomeRoutes({}: Props) {
  return (
    <RootDrawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#3f2f25',
        drawerActiveBackgroundColor: '#e3bba2',
      }}
    >
      <RootDrawer.Screen
        name="MealCategories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="list" color={color} size={size} />
          ),
        }}
      />
      <RootDrawer.Screen
        name="FavouriteMeals"
        component={FavouriteMealsScreen}
        options={{
          title: 'Favourite Meals',
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="star" color={color} size={size} />
          ),
        }}
      />
    </RootDrawer.Navigator>
  )
}
