import { mainColor } from "@/constants/Colors";
import { YouTubeVideo } from "@/types/youtubeSearchType";
import { StyleSheet, Text, View } from "react-native";
import Statistics from "./Statistics";

type VideoTabsProps = {
  video: YouTubeVideo;
};

const Details = ({ video }: VideoTabsProps) => {
  return (
    <View>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>{video.snippet.description}</Text>
      <Statistics views={video.snippet.views} likes={video.snippet.likes} />
    </View>
  );
};

const styles = StyleSheet.create({
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
