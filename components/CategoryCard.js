// ** React Native
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const CategoryCard = (props) => {
  // ** Props
  const { imageURI, title, redirectToCategoryRecipes } = props;

  return (
    <TouchableOpacity style={styles.card} onPress={redirectToCategoryRecipes}>
      <Image
        source={{
          uri: imageURI,
        }}
        style={styles.image}
      />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#fff",
    elevation: 4,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginTop: 14,
    width: (Dimensions.get("window").width / 12) * 11.4,
    marginLeft: "auto",
  },
  image: {
    width: (Dimensions.get("window").width / 12) * 4,
    height: Dimensions.get("window").height / 6,
    objectFit: "contain",
    marginLeft: 6,
  },
  categoryTitle: { fontSize: 24, fontWeight: "400" },
});

export default CategoryCard;
