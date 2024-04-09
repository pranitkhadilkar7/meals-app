export type RootStackParamList = {
  MealsCategories: undefined
  MealsOverview: { categoryId: string }
  MealDetailsScreen: { mealId: string }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
