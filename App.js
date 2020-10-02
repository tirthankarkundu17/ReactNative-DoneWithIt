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
        justifyContent: "center", //against the main axis or flexDirection
        alignItems: "center", //against secondary axis default is stretch applied to container within each line
        alignContent: "center", // for whole works only with wrap
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          // alignSelf: "flex-start", //for individual element
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "greenyellow",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "yellow",
        }}
      />
    </View>
  );
}
