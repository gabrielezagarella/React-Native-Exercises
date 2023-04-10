import React from "react";
import { View, Text, Button } from "react-native";
import ScreenFC from "../models/ScreenFC";

type A = "Home" | "Setting" | "Detail";
const test: A = "Setting";

const SettingScreen: ScreenFC<"Setting"> = ({ navigation }) => {
  return (
    <View>
      <Text>Sono in SettingScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default SettingScreen;
