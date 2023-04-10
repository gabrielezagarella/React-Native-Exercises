import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ScreenFC from "../models/ScreenFC";

const DetailScreen: ScreenFC<"Detail"> = ({ route, navigation }) => {
  const { params } = route;

  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
      <Text>Id {params?.id}</Text>
      <Text>Name {params?.name}</Text>
      <Button
        title="Navigate Detail"
        onPress={() => navigation.navigate("Detail")}
      />
      <Button title="Push Detail" onPress={() => navigation.push("Detail")} />
      <Button
        title="Navigate Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Setting Screen"
        onPress={() => navigation.navigate("Setting")}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
