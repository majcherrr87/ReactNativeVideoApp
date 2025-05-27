import { mainColor } from "@/constants/Colors";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Tab = "details" | "notes";

const Description = () => {
  const [activeTab, setActiveTab] = useState<Tab>("details");
  const description =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "details" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("details")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "details" && styles.activeTabText,
            ]}
          >
            Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "notes" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("notes")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "notes" && styles.activeTabText,
            ]}
          >
            Notes
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {activeTab === "details" ? (
          <View>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.notesText}>{description}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.descriptionTitle}>Notes</Text>
            <Text style={styles.notesText}>Notes are here</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#C8C8C8",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "transparent",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabButton: {
    borderBottomColor: mainColor,
  },
  tabText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    // color: "#666",
  },
  activeTabText: {
    color: mainColor,
  },
  content: {
    paddingTop: 16,
  },
  descriptionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 12,
    color: mainColor,
    paddingBottom: 8,
  },
  notesText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 12,
    color: mainColor,
    letterSpacing: 0.16,
  },
});

export default Description;
