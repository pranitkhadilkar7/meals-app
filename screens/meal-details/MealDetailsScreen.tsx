import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { memo, useLayoutEffect, useMemo } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../routes/route-type'
import { MEALS } from '../../data/dummy-data'
import { List } from './List'
import { FontAwesome } from '@expo/vector-icons'

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetailsScreen'>

export const MealDetailsScreen = memo(function MealDetailsScreen({
  route,
  navigation,
}: Props) {
  const selectedMeal = useMemo(() => {
    return MEALS.find((meal) => meal.id === route.params.mealId)
  }, [route.params.mealId])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome
          name="star"
          size={22}
          color="#e3bba2"
          onPress={() => {
            console.log('Star icon pressed')
          }}
        />
      ),
    })
  }, [navigation])

  return (
    <ScrollView style={styles.root}>
      <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal?.title}</Text>
        <View style={styles.detail}>
          <Text style={styles.detailItem}>{selectedMeal?.duration}m</Text>
          <Text style={styles.detailItem}>
            {selectedMeal?.complexity?.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {selectedMeal?.affordability?.toUpperCase()}
          </Text>
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>Ingredients</Text>
            </View>
            <List items={selectedMeal?.ingredients} />
          </View>
          <View style={styles.listContainer}>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>Steps</Text>
            </View>
            <List items={selectedMeal?.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  root: {
    marginBottom: 34,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailItem: {
    fontSize: 12,
    margin: 4,
    marginHorizontal: 4,
    color: 'white',
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 16,
    padding: 6,
    borderBottomColor: '#e3bba2',
    borderBottomWidth: 2,
  },
  subTitle: {
    color: '#e3bba2',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})
