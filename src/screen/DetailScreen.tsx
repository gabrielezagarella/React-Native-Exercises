import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenFC from "../models/ScreenFC";

const DetailScreen: ScreenFC<"Detail"> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen {route.params?.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailScreen;
