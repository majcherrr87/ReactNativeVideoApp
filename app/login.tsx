import ThemedButton from "@/components/ThemedButton";
import { Colors, mainColor } from "@/constants/Colors";
import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import appIcon from "../assets/images/app-icon.png"; // Adjust the path as necessary
import logo from "../assets/images/logo.png"; // Adjust the path as necessary

const Login = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={logo} />;
      <Image source={appIcon} />;
      <View style={styles.main}>
        <Text style={styles.text}>
          Welcome to the best YouTube-based learning application.
        </Text>
        <ThemedButton>Log in as guest</ThemedButton>
        <Text style={styles.termsAndPrivacyText}>
          {`By continuing you agree with \n`}
          <Text
            style={styles.linkText}
            onPress={() => {
              /* handle terms click */
            }}
          >
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text
            style={styles.linkText}
            onPress={() => {
              /* handle privacy click */
            }}
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  main: {
    width: "90%",
    alignItems: "center",
    gap: 20,
  },
  text: {
    width: "90%",
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1,
    lineHeight: 24,
  },
  termsAndPrivacyText: {
    width: "90%",
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 13,
    color: "#fff",
    lineHeight: 16,
    letterSpacing: 0,
  },
  linkText: {
    color: mainColor,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
});
