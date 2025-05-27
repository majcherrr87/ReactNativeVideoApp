import Search from "@/components/Search";
import SearchHeader from "@/components/SearchHeader";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function DynamicSearchScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();

  return (
    <View style={styles.container}>
      <Search />
      <SearchHeader searchQuery={category} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
