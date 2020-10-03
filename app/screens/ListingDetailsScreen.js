import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <AppText>Red jacket</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
