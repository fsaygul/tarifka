// ** React Native
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomBack = (props) => {
  const { title } = props;

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <TouchableOpacity onPress={goBack} style={styles.button}>
      <Image source={require("../assets/left-icon.png")} style={styles.image} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  image: { width: 25, height: 25, objectFit: "cover" },
});

export default CustomBack;
