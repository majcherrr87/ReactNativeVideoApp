import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";

interface VideoPlayerProps {
  videoId: string;
  width: number;
  onError: () => void;
  onBack: () => void;
}

export default function VideoPlayer({
  videoId,
  width,
  onError,
  onBack,
}: VideoPlayerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = (err: any) => {
    console.log("Video error:", err);
    setError(true);
    setLoading(false);
    onError();
  };

  // URL dla YouTube embed
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;

  return (
    <View style={[styles.container, { width }]}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Ładowanie wideo...</Text>
        </View>
      )}

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Nie można załadować wideo</Text>
          <TouchableOpacity style={styles.retryButton} onPress={onBack}>
            <Text style={styles.retryText}>Powrót do miniatury</Text>
          </TouchableOpacity>
        </View>
      )}

      {!error && (
        <>
          <WebView
            source={{ uri: embedUrl }}
            style={[styles.video, { width }]}
            onLoad={handleLoad}
            onError={handleError}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />

          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backText}>✕</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 280,
    backgroundColor: "#000",
    position: "relative",
  },
  video: {
    height: 280,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    zIndex: 1,
  },
  loadingText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 8,
  },
  retryText: {
    color: "#fff",
    fontSize: 14,
  },
  backButton: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
