// ** React
import { useEffect, useState } from "react";

// ** React Native
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

// ** Third Party
import axios from "axios";

// ** Component
import RecipeCard from "../components/RecipeCard";

const CategoryRecipesScreen = ({ route, navigation }) => {
  const [categoryMeals, setCategoryMeals] = useState([]);

  useEffect(() => {
    getCategoryMeals();
  }, []);

  const getCategoryMeals = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
        route.params.category
    );
    setCategoryMeals(res.data.meals);
  };

  const redirectToRecipe = (id, title) => {
    navigation.navigate("recipe", {
      id: id,
      title: title,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flag}></View>
      <Text style={styles.title}>Choose your favorite and let's start</Text>
      <FlatList
        data={categoryMeals}
        renderItem={({ item }) => (
          <RecipeCard
            imageURI={item.strMealThumb}
            title={item.strMeal}
            redirectToRecipe={() => redirectToRecipe(item.idMeal, item.strMeal)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
    padding: 8,
  },
  flag: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    position: "absolute",
    backgroundColor: "#fb6961",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  title: {
    fontSize: 26,
    fontWeight: "400",
    letterSpacing: 2,
    marginBottom: 20,
    color: "#fff",
  },
});

export default CategoryRecipesScreen;
