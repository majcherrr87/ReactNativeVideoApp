import Search from "@/components/Search";
import SearchHeader from "@/components/SearchHeader";
import VideoItem from "@/components/VideoItem";
import { mainColor } from "@/constants/Colors";
import useYouTubeSearch from "@/hooks/useYouTubeSearch";
import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DynamicSearchScreen() {
  const { searchQuery } = useLocalSearchParams<{ searchQuery: string }>();
  const { videos, loading, error } = useYouTubeSearch({
    initialQuery: searchQuery,
    maxResults: 10,
    enabled: true,
  });

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
        <Text style={styles.errorText}>Error loading videos: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Search />
      <SearchHeader searchQuery={searchQuery} />
      <ScrollView>
        {videos.map((video) => (
          <VideoItem
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            date={video.snippet.publishedAt}
            image={video.snippet.thumbnails.high.url}
            bigSize
            channelName={video.snippet.channelTitle}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
