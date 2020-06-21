import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function App() {
  // console.log(require("./assets/icon.png"));

  const handlePress = () => {
    console.log("Clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Velit commodo eu do
      </Text>

      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image
          // blurRadius={5}
          fadeDuration={1000} //works only on android
          style={styles.logo}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "200px",
    height: "300px",
  },
});
