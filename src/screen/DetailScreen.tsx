import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ScreenFC } from "../models/ScreenFC";
import { useDrawerStatus } from "@react-navigation/drawer";
import { getDrawerStatusFromState } from "@react-navigation/drawer";

const DetailScreen: ScreenFC<"Detail"> = ({ route, navigation }) => {
  const isDrawerOpen = useDrawerStatus();

  // useEffect(() => {
  //   navigation.addListener("state", () => {
  //     const isDrawerOpen2 = getDrawerStatusFromState({
  //       default: isDrawerOpen,
  //       key: "",
  //       index: 0,
  //       routeNames: [],
  //       routes: [],
  //       stale: false,
  //       type: "drawer",
  //       history: [],
  //     });
  //     console.log("isDrawerOpen2", navigation.getState());
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <Text>DetailScreen {route.params?.name}</Text>
      <Button
        title="Go to Favorites"
        color="red"
        onPress={() =>
          navigation.navigate("Favorite", { bookmark: 2, love: true })
        }
        // onPress={() => console.log("isDrawerOpen", isDrawerOpen)}
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

export default DetailScreen;
