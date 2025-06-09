import { mainColor } from "@/constants/Colors";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Notes = () => {
  const notes = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non.",
      time: "2:08",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non.",
      time: "4:51",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non.",
      time: "4:51",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non.",
      time: "4:51",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan. Donec accumsan pulvinar metus, euismod lacinia libero congue non.",
      time: "4:51",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "6:30",
    },
    {
      text: "Pellentesque venenatis semper purus a accumsan.",
      time: "8:15",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrapper}>
          {notes.map((note, index) => (
            <View key={index} style={styles.container}>
              <Text style={styles.text}>{note.text}</Text>
              <Text style={styles.time}>{note.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.addNote}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter notes..."
            placeholderTextColor="#2B2D4299"
            multiline
            numberOfLines={2}
            textAlignVertical="top"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  wrapper: {
    gap: 8,
    paddingBottom: 16,
  },
  container: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
    padding: 8,
  },
  inputWrapper: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#C8C8C8",
    borderRadius: 8,
  },
  searchInput: {
    fontSize: 12,
    color: mainColor,
    padding: 12,
    minHeight: 60,
    maxHeight: 60,
    textAlignVertical: "top",
  },

  text: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 12,
    color: mainColor,
    letterSpacing: 0.16,
  },
  time: {
    fontSize: 10,
    fontWeight: "bold",
    color: mainColor,
    textAlign: "right",
  },
  addNote: { marginBottom: 32 },
  button: {
    backgroundColor: mainColor,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",

    height: 40,
    width: 256,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Notes;
