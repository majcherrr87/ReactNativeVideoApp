import Search from "@/components/Search";
import SearchHeader from "@/components/SearchHeader";
import { SortOption } from "@/components/SortModal";
import VideoItem from "@/components/VideoItem";
import { mainColor } from "@/constants/Colors";
import useYouTubeSearch from "@/hooks/useYouTubeSearch";
import { sortVideos } from "@/scripts/SortVideo";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DynamicSearchScreen() {
  const { searchQuery } = useLocalSearchParams<{ searchQuery: string }>();
  const [selectedSort, setSelectedSort] = useState<SortOption>("popular");
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

  const SortVideo = sortVideos(videos, selectedSort);

  return (
    <View style={styles.container}>
      <Search />
      <SearchHeader
        resultsCount={videos.length}
        searchQuery={searchQuery}
        selectedSort={selectedSort}
        onSelectSort={(sort) => setSelectedSort(sort as SortOption)}
      />
      <ScrollView>
        {SortVideo.map((video) => (
          <VideoItem
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            date={video.snippet.publishedAt}
            image={{ uri: video.snippet.thumbnails.high.url }}
            bigSize
            channelName={video.snippet.channelTitle}
            videoTitle={""}
            videoChannel={""}
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
