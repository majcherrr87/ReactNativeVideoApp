import { mainColor } from "@/constants/Colors";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type SortOption = "latest" | "oldest" | "popular";

export const sortOptions = [
  { id: "latest", label: "Upload date: latest" },
  { id: "oldest", label: "Upload date: oldest" },
  { id: "popular", label: "Most Popular" },
] as const;

type SortModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
};
const SortModal = ({
  visible,
  onClose,
  selectedSort,
  onSelectSort,
}: SortModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Sort records by:</Text>

          <View style={styles.optionsWrapper}>
            {sortOptions.map((option) => (
              <Pressable
                key={option.id}
                style={styles.optionContainer}
                onPress={() => onSelectSort(option.id)}
              >
                <View style={styles.radio}>
                  {selectedSort === option.id && (
                    <View style={styles.radioInner} />
                  )}
                </View>
                <Text style={styles.optionText}>{option.label}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.confirmButton} onPress={onClose}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(10, 10, 10, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  modalContent: {
    backgroundColor: "#8D99AE",
    borderRadius: 24,
    padding: 24,
    width: "100%",
    maxWidth: 320,
    height: 400,
    justifyContent: "space-between",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#fff",
  },
  optionsWrapper: {
    flex: 1,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: mainColor,
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  buttonWrapper: {
    width: "100%",
    marginTop: "auto",
  },
  confirmButton: {
    paddingVertical: 16,
    backgroundColor: mainColor,
    borderRadius: 8,
    width: "100%",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default SortModal;
