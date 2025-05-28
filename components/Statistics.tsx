import LikeIcon from "@/assets/icons/likes-icon.svg";
import ViewIcon from "@/assets/icons/views-icon.svg";
import { mainColor } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type StatisticsProps = {
  views: number;
  likes: number;
};

const Statistics = ({ likes, views }: StatisticsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <ViewIcon width={20} height={20} color="#fff" />
          <Text style={styles.buttonText}>
            <Text style={styles.numberText}>{views}</Text> views
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <LikeIcon width={20} height={20} color="#fff" />
          <Text style={styles.buttonText}>
            <Text style={styles.numberText}>{likes}</Text> likes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 12,
    color: mainColor,
    paddingBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    width: 136,
    height: 32,
    borderRadius: 8,
    backgroundColor: mainColor,
    gap: 8,
  },
  buttonText: {
    textAlign: "center",
    paddingLeft: 8,
    fontSize: 10,
    color: "#fff",
  },
  numberText: {
    fontWeight: "600",
    color: "#fff",
  },
});

export default Statistics;
