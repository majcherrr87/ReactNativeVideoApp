import Avater from "@/components/Avater";
import Description from "@/components/Description";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function VideoDetailsScreen() {
  const { videoId } = useLocalSearchParams<{ videoId: string }>();
  const { width } = Dimensions.get("window");

  const videoData = {
    title: "React Native Tutorial - Building a Mobile App from Scratch",
    thumbnail: require("@/assets/images/fotoExample.png"),
  };

  return (
    <View style={styles.container}>
      <Image
        source={videoData.thumbnail}
        style={[styles.thumbnail, { width: width }]}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {videoData.title}
        </Text>
        <Avater channelName="Channel name" />
        <Description />
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
});
