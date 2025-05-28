import Avater from "@/components/Avater";
import VideoTabs from "@/components/VideoTabs";
import { mainColor } from "@/constants/Colors";
import { useYouTubeVideo } from "@/hooks/useYouTubeVideo";
import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function VideoDetailsScreen() {
  const { videoId } = useLocalSearchParams<{ videoId: string }>();
  const { width } = Dimensions.get("window");
  const { video, loading, error } = useYouTubeVideo(videoId);

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={mainColor} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!video) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          typeof video.snippet.thumbnails.high.url === "string"
            ? { uri: video.snippet.thumbnails.high.url }
            : video.snippet.thumbnails.high.url
        }
        style={[styles.thumbnail, { width }]}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {video.snippet.title}
        </Text>
        <Avater channelName={video.snippet.channelTitle} />
        <VideoTabs video={video} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    height: 280,
    backgroundColor: "#000",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0.16,
    color: "#000",
    flexWrap: "wrap", // Allow text to wrap
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    padding: 16,
  },
});
