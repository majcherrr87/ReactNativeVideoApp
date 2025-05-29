import ThemedButton from "@/components/ThemedButton";
import { Colors, mainColor } from "@/constants/Colors";
import { router } from "expo-router";
import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import appIcon from "../assets/images/app-icon.png"; // Adjust the path as necessary
import logo from "../assets/images/logo.png"; // Adjust the path as necessary

const Login = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={logo} style={styles.logo} />
      <Image source={appIcon} style={styles.appIcon} />
      <View style={styles.footer}>
        <Text style={styles.text}>
          Welcome to the best YouTube-based learning application.
        </Text>
        <ThemedButton onPress={() => router.push("/")}>
          Log in as guest
        </ThemedButton>
        <Text style={styles.termsAndPrivacyText}>
          {`By continuing you agree with \n`}
          <Text style={styles.linkText}>Terms and Conditions</Text>
          <Text> and </Text>
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
  logo: {
    width: "70%",
    height: "20%",
    resizeMode: "contain",
  },
  appIcon: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  footer: {
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
