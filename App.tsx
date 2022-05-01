import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerBox}>
        <View style={styles.rettangle} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.circleOne} />
        <View style={styles.circleTwo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
    justifyContent: "center",
  },
  containerBox: {
    borderColor: "grey",
    borderWidth: 3,
    height: 200,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    borderRadius: 10,
  },
  rettangle: {
    backgroundColor: "black",
    height: "100%",
    width: 80,
  },
  box: {
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  circleOne: {
    backgroundColor: "pink",
    height: 60,
    width: 60,
    position: "absolute",
    bottom: 170,
    left: 130,
    borderRadius: 30,
  },
  circleTwo: {
    backgroundColor: "pink",
    height: 60,
    width: 60,
    position: "absolute",
    top: 170,
    left: 270,
    borderRadius: 30,
  },
});
