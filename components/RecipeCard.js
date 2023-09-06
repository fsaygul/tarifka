// ** React Native
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const RecipeCard = (props) => {
  // ** Props
  const { imageURI, title, redirectToRecipe } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={redirectToRecipe}>
      <Image
        source={{
          uri: imageURI,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    objectFit: "cover",
    width: Dimensions.get("window").width - 16,
    height: Dimensions.get("window").height / 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "400",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default RecipeCard;
