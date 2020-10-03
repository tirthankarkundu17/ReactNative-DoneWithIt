import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "../config/colors";

export default function AppText({ title }) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 18,
  },
});
