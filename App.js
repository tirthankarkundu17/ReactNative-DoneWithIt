import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback, //Only works for Android
  SafeAreaView,
  Alert,
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

      <TouchableOpacity onPress={() => console.log("CK")}>
        <Image
          // blurRadius={5}
          fadeDuration={1000} //works only on android
          style={styles.logo}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </TouchableOpacity>

      <Button
        color="orange"
        title="ClickMe"
        onPress={() =>
          Alert.alert("Title", "Tapped", [
            {
              text: "Yes",
              onPress: () => {
                console.log("yes");
              },
            },
            {
              text: "No",
              onPress: () => {
                console.log("no");
              },
            },
          ])
        }
      />
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
    width: 200,
    height: 200,
  },
});
