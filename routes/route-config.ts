import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootNavigationParamList } from './route-type'
import { createDrawerNavigator } from '@react-navigation/drawer'

export const RootStack = createNativeStackNavigator<RootNavigationParamList>()

export const RootDrawer = createDrawerNavigator<RootNavigationParamList>()
