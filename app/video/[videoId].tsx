import Avater from "@/components/Avater";
import VideoTabs from "@/components/VideoTabs";
import VideoPlayer from "@/components/VideoPlayer"; // Import nowego komponentu
import { mainColor } from "@/constants/Colors";
import { useYouTubeChannelAvatar } from "@/hooks/useYouTubeChannelAvatar";
import { useYouTubeVideo } from "@/hooks/useYouTubeVideo";
import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function VideoDetailsScreen() {
  const { videoId } = useLocalSearchParams<{ videoId: string }>();
  const { width } = Dimensions.get("window");
  const { video, loading, error } = useYouTubeVideo(videoId);
  const { urlAvater } = useYouTubeChannelAvatar(video?.snippet.channelId);

  // Stan do kontrolowania czy wyświetlać wideo czy miniaturę
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  // Funkcja do sprawdzania czy można odtworzyć wideo
  const checkVideoPlayability = () => {
    if (!video) return false;

    // Sprawdzanie podstawowych warunków dostępności wideo
    const isEmbeddable = video?.status?.embeddable !== false;
    const isNotPrivate = video?.status?.privacyStatus !== "private";
    const isNotRejected = video?.status?.uploadStatus !== "rejected";
    const hasLiveBroadcastContent =
      video?.snippet?.liveBroadcastContent !== "live";

    return (
      isEmbeddable && isNotPrivate && isNotRejected && hasLiveBroadcastContent
    );
  };

  const handleThumbnailPress = () => {
    if (checkVideoPlayability()) {
      setShouldShowVideo(true);
    }
  };

  const handleVideoError = () => {
    setShouldShowVideo(false);
  };

  const handleBackToThumbnail = () => {
    setShouldShowVideo(false);
  };

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

  const videoPlayable = checkVideoPlayability();

  return (
    <View style={styles.container}>
      {shouldShowVideo && videoPlayable ? (
        // Wyświetlanie komponentu wideo
        <VideoPlayer
          videoId={videoId as string}
          width={width}
          onError={handleVideoError}
          onBack={handleBackToThumbnail}
        />
      ) : (
        // Wyświetlanie miniatury
        <TouchableOpacity
          style={[styles.thumbnailContainer, { width }]}
          onPress={handleThumbnailPress}
          disabled={!videoPlayable}
          activeOpacity={videoPlayable ? 0.8 : 1}
        >
          <Image
            source={
              typeof video.snippet.thumbnails.high.url === "string"
                ? { uri: video.snippet.thumbnails.high.url }
                : video.snippet.thumbnails.high.url
            }
            style={[styles.thumbnail, { width }]}
          />

          {/* Overlay z przyciskiem play gdy wideo jest dostępne */}
          {videoPlayable && (
            <View style={styles.playOverlay}>
              <View style={styles.playButton}>
                <Text style={styles.playButtonText}>▶</Text>
              </View>
              <Text style={styles.playHint}>Dotknij aby odtworzyć</Text>
            </View>
          )}

          {/* Informacja o niedostępności wideo */}
          {!videoPlayable && (
            <View style={styles.unavailableOverlay}>
              <Text style={styles.unavailableText}>
                Wideo niedostępne do odtworzenia
              </Text>
              <Text style={styles.unavailableSubtext}>
                Możesz obejrzeć je na YouTube
              </Text>
            </View>
          )}
        </TouchableOpacity>
      )}

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {video.snippet.title}
        </Text>
        <Avater
          channelName={video.snippet.channelTitle}
          imageUrl={urlAvater ?? undefined}
        />
        <VideoTabs video={video} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    height: 280,
    backgroundColor: "#000",
  },
  playOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.95)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  playButtonText: {
    fontSize: 28,
    color: "#000",
    marginLeft: 4, // Przesunięcie dla wizualnego wyśrodkowania trójkąta
  },
  playHint: {
    color: "white",
    fontSize: 14,
    marginTop: 15,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  unavailableOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  unavailableText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  unavailableSubtext: {
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 0.16,
    color: "#000",
    flexWrap: "wrap",
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
