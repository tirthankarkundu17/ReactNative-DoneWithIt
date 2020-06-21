import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export default function App() {
  console.log("Welcome");

  const handlePress = () => {
    console.log("Clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Velit commodo eu do excepteur eiusmod enim culpa ullamco consequat.
        Cillum pariatur cillum consequat ut commodo veniam aute velit officia
        aute. Qui reprehenderit adipisicing proident esse commodo duis id
        deserunt esse veniam. Fugiat amet cupidatat excepteur anim dolore
        laborum do eu do qui eu elit. Irure consectetur eu consectetur amet
        nulla Lorem eu cupidatat aliqua. Ullamco sit proident id ullamco. Nulla
        id ut commodo fugiat nostrud minim.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
