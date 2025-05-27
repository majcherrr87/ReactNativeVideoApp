import { mainColor } from "@/constants/Colors";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import VideoItem from "./VideoItem";

type CategoryItemsProps = {
  title: string;
  onPressed?: () => void; // Make it optional with ?
};

const items = [
  {
    id: "1",
    image: require("@/assets/images/fotoExample.png"),
    title:
      "React Native Basics - Getting Started with React Native Development and Building Your First App",
    date: "2024-02-20",
  },
  {
    id: "2",
    image: require("@/assets/images/fotoExample.png"),
    title:
      "React Native Basics - Getting Started with React Native Development and Building Your First App",
    date: "2024-02-20",
  },
  {
    id: "3",
    image: require("@/assets/images/fotoExample.png"),
    title:
      "React Native Basics - Getting Started with React Native Development and Building Your First App",
    date: "2024-02-20",
  },
];

const CategoryItems = ({ title, onPressed }: CategoryItemsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.showMore} onPress={onPressed}>
          show more
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {items.map(({ id, title, date, image }) => (
          <VideoItem
            key={id}
            title={title}
            date={date}
            image={image}
            videoId={"gggg"}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: mainColor,
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
    letterSpacing: 0.16,
  },
  showMore: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.16,
    textDecorationLine: "underline",
    color: mainColor,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 16,
  },
  itemContainer: {
    width: 200,
    marginRight: 16,
  },
  thumbnail: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: 0.16,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    color: mainColor,
    lineHeight: 24,
    textAlign: "right",
  },
});
