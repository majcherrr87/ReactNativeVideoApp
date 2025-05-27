import Search from "@/components/Search";
import SearchHeader from "@/components/SearchHeader";
import VideoItem from "@/components/VideoItem";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function DynamicSearchScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();

  const image = require("@/assets/images/fotoExample.png");

  return (
    <View style={styles.container}>
      <Search />
      <SearchHeader searchQuery={category} />
      <ScrollView>
        <VideoItem
          title={
            "React Native Basics - Getting Started with React Native Development "
          }
          date={"2024-02-20"}
          image={image}
          bigSize
          channelName={"React Native Channel"}
        />
        <VideoItem
          title={
            "React Native Basics - Getting Started with React Native Development "
          }
          date={"2024-02-20"}
          image={image}
          bigSize
          channelName={"React Native Channel"}
        />
        <VideoItem
          title={
            "React Native Basics - Getting Started with React Native Development "
          }
          date={"2024-02-20"}
          image={image}
          bigSize
          channelName={"React Native Channel"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
