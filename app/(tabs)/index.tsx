import Search from "@/components/Search";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Search />
      <ScrollView>
        <View></View>
        <Text>Content 1</Text>
        <Text>Content 2</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
