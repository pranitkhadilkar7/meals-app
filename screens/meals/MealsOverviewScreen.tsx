import { FlatList, StyleSheet, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/route-type'
import { memo, useMemo } from 'react'
import { MEALS } from '../../data/dummy-data'
import { MealItem } from './MealItem'

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>

export const MealsOverviewScreen = memo(function MealsOverviewScreen({
  route,
}: Props) {
  const meals = useMemo(
    () =>
      MEALS.filter((meal) =>
        meal.categoryIds.includes(route.params.categoryId)
      ),
    []
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: 'yellow',
  },
})
