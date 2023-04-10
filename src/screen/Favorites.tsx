import React from "react";
import { View, Button } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";

const Favorites: CustomScreenFC<"Favorite"> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Profile"
        color="red"
        onPress={() => navigation?.navigate("Profile")}
      />
    </View>
  );
};

export default Favorites;
