import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";

const ProfileScreen: CustomScreenFC<"Profile"> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to Setting"
        color="red"
        onPress={() => navigation?.navigate("Setting", { setting: "Default" })}
      />
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
