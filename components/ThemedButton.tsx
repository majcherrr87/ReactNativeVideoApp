import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { mainColor } from "../constants/Colors";

type ThemedButtonProps = PressableProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  style,
  children,
  onPress,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: mainColor,
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
    gap: 10,
    width: "90%",
    height: 48,
    marginHorizontal: 16,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "center",
  },
});
