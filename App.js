import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
      <AppText>How are you ?</AppText>
    </View>
  );
}
