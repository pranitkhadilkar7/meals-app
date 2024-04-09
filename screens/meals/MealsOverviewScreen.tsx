import { StyleSheet, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/route-type'
import { memo } from 'react'

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>

export const MealsOverviewScreen = memo(function MealsOverviewScreen({
  route,
}: Props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Meals Overview Screen. {route.params.categoryId}</Text>
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
