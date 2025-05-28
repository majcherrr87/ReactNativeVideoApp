import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Details from "./Details";
import Notes from "./Notes";
import TabButton from "./TabButton";
import { YouTubeVideo } from "@/types/youtubeSearchType";

type Tab = "details" | "notes";
type VideoTabsProps = {
  video: YouTubeVideo;
};

const VideoTabs = ({ video }: VideoTabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabButton
          title="Details"
          isActive={activeTab === "details"}
          onPress={() => setActiveTab("details")}
        />
        <TabButton
          title="Notes"
          isActive={activeTab === "notes"}
          onPress={() => setActiveTab("notes")}
        />
      </View>

      <View style={styles.content}>
        {activeTab === "details" ? <Details video={video} /> : <Notes />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#C8C8C8",
  },
  content: {
    paddingTop: 16,
  },
});

export default VideoTabs;
