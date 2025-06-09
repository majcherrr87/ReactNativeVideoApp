import { mainColor } from "@/constants/Colors";
import { YouTubeVideo } from "@/types/youtubeSearchType";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Statistics from "./Statistics";

type VideoTabsProps = {
  video: YouTubeVideo;
};

const Details = ({ video }: VideoTabsProps) => {
  console.log({ video });
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        // contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{video.snippet.description}</Text>
      </ScrollView>
      <Statistics
        views={video.statistics?.viewCount ?? "0"}
        likes={video.statistics?.likeCount ?? "0"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // <-- najważniejsze!
    // backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1, // <-- zajmuje całą dostępną przestrzeń nad Statistics
  },
  scrollContent: {
    // padding: 16,
  },
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
