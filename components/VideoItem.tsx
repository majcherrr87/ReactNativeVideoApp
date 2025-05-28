import { mainColor } from "@/constants/Colors";
import { formatDate } from "@/scripts/formatDate";
import { router } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type VideoItemProps = {
  title: string;
  date: string;
  image: ImageSourcePropType;
  videoId: string;
  channelName?: string;
  bigSize?: boolean;
};

const VideoItem = ({
  title,
  date,
  image,
  bigSize,
  channelName,
  videoId,
}: VideoItemProps) => {
  const handlePress = () => {
    router.push(`/video/${videoId}`);
  };

  return (
    <Pressable
      style={[styles.container, bigSize && styles.containerBig]}
      onPress={handlePress}
    >
      <Image
        source={image}
        style={[styles.thumbnail, bigSize && styles.thumbnailBig]}
      />
      <View style={styles.content}>
        {bigSize && channelName && (
          <Text style={styles.channelName}>{channelName}</Text>
        )}
        <Text
          style={[styles.title, bigSize && styles.titleBig]}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text style={styles.date}>{formatDate(date)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: 16,
  },
  containerBig: {
    width: "100%",
    marginRight: 0,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  thumbnail: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  thumbnailBig: {
    height: 200,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.16,
    marginBottom: 4,
  },
  titleBig: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 12,
  },
  channelName: {
    fontSize: 12,
    fontWeight: "bold",
    color: mainColor,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    color: mainColor,
    lineHeight: 16,
    textAlign: "right",
  },
});

export default VideoItem;
