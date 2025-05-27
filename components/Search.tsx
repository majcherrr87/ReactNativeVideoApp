import SearchIcon from "@/assets/icons/search-icon.svg";
import SettingsIcon from "@/assets/icons/settings-icon.svg";
import { mainColor } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <SearchIcon width={24} height={24} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search videos"
          placeholderTextColor="#2B2D4299"
        />
      </View>
      <SettingsIcon
        style={styles.settingsIcon}
        width={32}
        height={32}
        color={mainColor}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
    marginTop: 32,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: mainColor,
    marginHorizontal: 16,
    marginRight: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
    alignSelf: "center",
  },
  settingsIcon: {
    marginLeft: 8,
  },
});
