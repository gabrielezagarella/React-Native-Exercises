import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenFC from "../models/ScreenFC";

const ProfileScreen: ScreenFC<"Profile"> = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen {route.params?.id}</Text>
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

export default ProfileScreen;
