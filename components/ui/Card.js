import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 18,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 24,
    elevation: 4, // shadow for android
    shadowColor: "black", // shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // shadow for iOS
    shadowRadius: 6, // shadow for iOS
    shadowOpacity: 0.25, // shadow for iOS
  },
});
