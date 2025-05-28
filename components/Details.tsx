import { mainColor } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import Statistics from "./Statistics";

const Details = () => {
  const description =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <View>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <Statistics />
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 12,
    color: mainColor,
    paddingBottom: 8,
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 12,
    color: mainColor,
    letterSpacing: 0.16,
  },
});

export default Details;
