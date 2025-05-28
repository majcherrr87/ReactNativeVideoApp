import CategoryItems from "@/components/CategoryItems";
import Search from "@/components/Search";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const CATEGORIES = ["React Native", "React", "TypeScript", "JavaScript"];

  return (
    <View style={styles.container}>
      <Search seatingsIcon />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {CATEGORIES.map((category) => (
          <CategoryItems
            key={category}
            title={category}
            onPressed={() =>
              router.push(
                `/(tabs)/[search]?searchQuery=${encodeURIComponent(category)}`
              )
            }
            searchQuery={category}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    // paddingBottom: 100,
  },
});
