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
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "whitesmoke",
        flexDirection: "row", //direction of flex
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "dodgerblue",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "tomato",
        }}
      />
    </View>
  );
}
