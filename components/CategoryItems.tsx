import { mainColor } from "@/constants/Colors";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useYouTubeSearch from "../hooks/useYouTubeSearch";
import VideoItem from "./VideoItem";
import { YouTubeVideo } from "../types/youtubeSearchType";

type CategoryItemsProps = {
  title: string;
  searchQuery: string;
  onPressed?: () => void;
};

const CategoryItems = ({
  title,
  searchQuery,
  onPressed,
}: CategoryItemsProps) => {
  const { videos, loading, error, fetchVideos } = useYouTubeSearch({
    initialQuery: searchQuery,
    maxResults: 5,
    enabled: true,
  });

  useEffect(() => {
    fetchVideos(searchQuery);
  }, [searchQuery, fetchVideos]);

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        {onPressed && (
          <Text style={styles.showMore} onPress={onPressed}>
            show more
          </Text>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {loading && (
          <ActivityIndicator
            size="small"
            color={mainColor}
            style={styles.loader}
          />
        )}
        {!loading && error && (
          <Text style={styles.loader}>Błąd ładowania filmów: {error}</Text>
        )}
        {!loading && videos.length === 0 && !error && (
          <Text style={styles.loader}>Brak wyników do wyświetlenia.</Text>
        )}

        {videos.map((item: YouTubeVideo) => (
          <VideoItem
            key={item.id.videoId}
            title={item.snippet.title}
            date={item.snippet.publishedAt}
            image={{ uri: item.snippet.thumbnails.medium.url }}
            videoId={item.id.videoId}
            videoTitle={item.snippet.title}
            videoChannel={item.snippet.channelTitle}
            streamUrl={item.streamUrl}
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
  loader: {
    alignSelf: "center",
    marginVertical: 10,
    minWidth: 100,
  },
});
