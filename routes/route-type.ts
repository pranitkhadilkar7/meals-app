/* eslint-disable @typescript-eslint/no-namespace */
export type RootStackParamList = {
  HomeRoutes: undefined
  MealsOverview: { categoryId: string }
  MealDetailsScreen: { mealId: string }
}

export type RootDrawerParamList = {
  MealCategories: undefined
  FavouriteMeals: undefined
}

export type RootNavigationParamList = RootStackParamList & RootDrawerParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigationParamList {}
  }
}
