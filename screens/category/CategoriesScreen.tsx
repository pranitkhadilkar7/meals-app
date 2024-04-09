import { FlatList, Text, View } from 'react-native'
import { CATEGORIES } from '../../data/dummy-data'
import { CategoryGridItem } from './CategoryGridItem'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/route-type'

type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>

export function CategoriesScreen({ navigation }: Props) {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => (
        <CategoryGridItem
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => {
            navigation.navigate('MealsOverview')
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}
