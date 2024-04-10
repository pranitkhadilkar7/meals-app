import { FlatList, Text, View } from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
import { CategoryGridItem } from './CategoryGridItem'
import type { DrawerScreenProps } from '@react-navigation/drawer'
import { RootNavigationParamList } from '../../routes/route-type'

type Props = DrawerScreenProps<RootNavigationParamList, 'MealCategories'>

export function CategoriesScreen({ navigation }: Props) {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryGridItem
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => {
            navigation.navigate('MealsOverview', {
              categoryId: itemData.item.id,
            })
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}
