// ** React,
import { useEffect, useState } from "react";

// ** React Native
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ** Axios
import axios from "axios";

const RecipeScreen = ({ route }) => {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + route.params.id
    );
    setRecipe(res.data.meals[0]);
  };

  const redirectToYoutube = () => {
    Linking.openURL(recipe?.strYoutube);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={{
            uri: recipe?.strMealThumb,
          }}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.youtubeButton}
          onPress={redirectToYoutube}
        >
          <Image
            source={require("../assets/youtube-icon.png")}
            style={styles.youtubeLogo}
          />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <View style={styles.titleWrapper}>
          <Text style={styles.mainTitle}>{recipe?.strMeal}</Text>
          <Text style={styles.subTitle}>{recipe?.strArea}</Text>
        </View>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.instructions}>{recipe?.strInstructions}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.5,
  },
  youtubeButton: {
    position: "absolute",
    bottom: -30,
    right: 10,
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 10,
  },
  youtubeLogo: {
    width: 70,
    height: 40,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#d1d1d1",
  },
  description: { fontSize: 20, fontWeight: "400", marginBottom: 8 },
  instructions: {
    fontSize: 18,
    fontWeight: "300",
  },
});

export default RecipeScreen;
