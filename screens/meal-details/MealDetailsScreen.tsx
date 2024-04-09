import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { memo } from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../../routes/route-type'

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetailsScreen'>

export const MealDetailsScreen = memo(function MealDetailsScreen({
  route,
}: Props) {
  return (
    <View>
      <Text>Welcome to Meal Details Screen. {route.params.mealId}</Text>
    </View>
  )
})
