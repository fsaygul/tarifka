// ** React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ** Screens
import CategoryScreen from "./screens/CategoryScreen";
import CategoryRecipesScreen from "./screens/CategoryRecipesScreen";
import RecipeScreen from "./screens/RecipeScreen";
import CustomBack from "./components/CustomBack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="category"
          component={CategoryScreen}
          options={{
            title: "Categories",
            headerTitleAlign: "center",
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="categoryRecipes"
          component={CategoryRecipesScreen}
          options={({ route }) => ({
            title: route.params.category + " Recipes",
            headerTitleAlign: "center",
            headerLeft: () => <CustomBack title="Categories" />,
          })}
        />
        <Stack.Screen
          name="recipe"
          component={RecipeScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerTitleAlign: "center",
            headerLeft: () => <CustomBack title="Meals" />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
