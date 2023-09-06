// ** React Native
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

// ** Third Part
import axios from "axios";

// ** React
import { useEffect, useState } from "react";

// ** Component
import CategoryCard from "../components/CategoryCard";

const CategoryScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategories(res.data.categories);
  };

  const redirectToCategoryRecipes = (title) => {
    navigation.navigate("categoryRecipes", {
      category: title,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flag}></View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            imageURI={item.strCategoryThumb}
            title={item.strCategory}
            redirectToCategoryRecipes={() =>
              redirectToCategoryRecipes(item.strCategory)
            }
          />
        )}
        keyExtractor={(item) => item.idCategory}
        ListHeaderComponent={
          <Text style={styles.title}>
            In which category would you like to exhibit your art today?
          </Text>
        }
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

export default CategoryScreen;
