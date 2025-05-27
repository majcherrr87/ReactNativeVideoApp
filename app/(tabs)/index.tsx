import CategoryItems from "@/components/CategoryItems";
import Search from "@/components/Search";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Search />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <CategoryItems title="React Native" />
        <CategoryItems title="React " />
        <CategoryItems title="TypeSctipt" />
        <CategoryItems title="JavaSctipt" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
});
