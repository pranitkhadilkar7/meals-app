import { FlatList, Text, View } from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
import { CategoryGridItem } from './CategoryGreedItem'

export function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryGridItem
          title={itemData.item.title}
          color={itemData.item.color}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}
