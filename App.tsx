import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [state, setState] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ marginVertical: 20 }}>What is your name?</Text>
      <Text>My name is: {state}</Text>
      <TextInput
        placeholder="Enter you name"
        style={{ height: 40, width: 200 }}
        onChangeText={(e) => setState(e)}
      />
      <View style={{ flexDirection: "row" }}>
        <Button title="Update" onPress={() => setState("Gabriele")} />
        <Button title="Delete" color="red" onPress={() => setState("")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
  },
});
