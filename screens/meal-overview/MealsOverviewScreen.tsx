import { FlatList, StyleSheet, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/route-type'
import { memo, useCallback, useLayoutEffect, useMemo } from 'react'
import { CATEGORIES, MEALS } from '../../data/dummy-data'
import { MealItem } from './MealItem'

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>

export const MealsOverviewScreen = memo(function MealsOverviewScreen({
  route,
  navigation,
}: Props) {
  const categoryId = useMemo(() => {
    return route.params.categoryId
  }, [])
  const meals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)),
    []
  )

  const mealSelectHandler = useCallback((mealId: string) => {
    navigation.navigate('MealDetailsScreen', { mealId })
  }, [])

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === categoryId)
    navigation.setOptions({ title: category?.title ?? '' })
  }, [categoryId, navigation])

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
            onPress={mealSelectHandler.bind({}, itemData.item.id)}
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
