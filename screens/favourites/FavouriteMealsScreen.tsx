import { memo, useCallback, useMemo } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useAppSelector } from '../../store/hooks'
import { selectFavourite } from './favourite-slice'
import { MEALS } from '../../data/dummy-data'
import { MealItem } from '../meal-overview/MealItem'
import { useNavigation } from '@react-navigation/native'

export const FavouriteMealsScreen = memo(function FavouriteMealsScreen() {
  const { mealIds } = useAppSelector(selectFavourite)
  const navigation = useNavigation()

  const meals = useMemo(() => {
    return MEALS.filter((meal) => !!mealIds[meal.id])
  }, [mealIds])

  const favouritesPresent = useMemo(() => {
    return !!Object.keys(mealIds).find((mealId) => mealIds[mealId])
  }, [mealIds])

  const mealSelectHandler = useCallback(
    (mealId: string) => {
      navigation.navigate('MealDetailsScreen', { mealId })
    },
    [navigation]
  )

  if (favouritesPresent) {
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
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>No Data Found</Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
})
