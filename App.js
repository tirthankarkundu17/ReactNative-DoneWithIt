import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export default function App() {
  console.log("Welcome");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );

  function onPressLearnMore() {
    console.log("clicked");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
