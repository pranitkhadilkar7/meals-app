import { memo } from 'react'
import { Text, View } from 'react-native'

type Props = {
  title: string
}

export const MealItem = memo(function MealItem({ title }: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
})
