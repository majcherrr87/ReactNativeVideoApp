import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SortModal, { SortOption, sortOptions } from "./SortModal";

type SearchHeaderProps = {
  resultsCount?: number;
  searchQuery: string;
  selectedSort: SortOption;
  onSelectSort: (sort: string) => void;
};

const SearchHeader = ({
  resultsCount = 0,
  searchQuery,
  selectedSort,
  onSelectSort,
}: SearchHeaderProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.results}>
        <Text style={styles.resultsText}>
          {resultsCount} results found for:{" "}
        </Text>
        <Text style={styles.value}>&quot;{searchQuery}&quot;</Text>
      </View>
      <Pressable style={styles.sort} onPress={() => setModalVisible(true)}>
        <Text style={styles.sortText}>Sort by: </Text>
        <Text style={styles.sortValue}>
          {sortOptions.find((opt) => opt.id === selectedSort)?.label}
        </Text>
      </Pressable>

      <SortModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        selectedSort={selectedSort}
        onSelectSort={onSelectSort}
      />
    </>
  );
};

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

export default SearchHeader;
