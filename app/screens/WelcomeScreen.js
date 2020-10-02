import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => console.log("Tapped")}
        ></AppButton>

        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Tapped")}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    height: 70,
    backgroundColor: colors.primary,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  registerButton: {
    height: 70,
    backgroundColor: colors.secondary,
  },
  buttonContainer: {
    padding: 10,
    width: "90%",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
