import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  console.log("Welcome");

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );

  function onPressLearnMore() {
    console.log("clicked");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
