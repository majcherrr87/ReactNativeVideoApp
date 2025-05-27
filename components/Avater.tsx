import UserIcon from "@/assets/icons/person-icon.svg";
import { mainColor } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

type AvatarProps = {
  imageUrl?: string;
  channelName: string;
};

const Avatar = ({ imageUrl, channelName }: AvatarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.avatar} />
        ) : (
          <UserIcon width={20} height={20} color="#fff" />
        )}
      </View>
      <Text style={styles.channelName}>{channelName}</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: mainColor,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  channelName: {
    fontSize: 14,
    fontWeight: "700",
    color: mainColor,
    letterSpacing: 0.16,
    lineHeight: 12,
  },
});
