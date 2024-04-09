import { Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../routes/route-type'

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>

export function MealsOverviewScreen() {
  return (
    <View>
      <Text>Welcome to Meals Overview Screen</Text>
    </View>
  )
}
