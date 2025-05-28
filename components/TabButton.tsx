import { mainColor } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type TabButtonProps = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

const TabButton = ({ title, isActive, onPress }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeTabButton]}
      onPress={onPress}
    >
      <Text style={[styles.tabText, isActive && styles.activeTabText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "transparent",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTabButton: {
    borderBottomColor: mainColor,
  },
  tabText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  activeTabText: {
    color: mainColor,
  },
});

export default TabButton;
