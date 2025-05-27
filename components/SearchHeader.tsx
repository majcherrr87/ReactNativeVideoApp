import { StyleSheet, Text, View } from "react-native";

type SearchHeaderProps = {
  resultsCount?: number;
  searchQuery: string;
};

const SearchHeader = ({ resultsCount = 0, searchQuery }: SearchHeaderProps) => {
  return (
    <>
      <View style={styles.results}>
        <Text style={styles.resultsText}>{resultsCount} results found for: </Text>
        <Text style={styles.value}>&quot;{searchQuery}&quot;</Text>
      </View>
      <View style={styles.sort}>
        <Text style={styles.sortText}>Sort by: </Text>
        <Text style={styles.sortValue}>Most popular</Text>
      </View>
    </>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  results: {
    flexDirection: "row",
    marginLeft: 16,
  },
  resultsText: {
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
  value: {
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
  sort: {
    flexDirection: "row",
    marginRight: 16,
    marginTop: 8,
    alignSelf: "flex-end",
  },
  sortText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
  sortValue: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
});