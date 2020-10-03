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
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <ListingDetailsScreen />
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red Jacket"
    //     subTitle="100"
    //     image={require("./app/assets/jacket.jpg")}
    //   ></Card>
    // </View>
  );
}
