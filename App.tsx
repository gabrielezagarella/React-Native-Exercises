import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    // Esempio 1
    // <View style={styles.container}>
    //   {/* <Text>Open up App.tsx to start working on your app!</Text> */}
    //   <View style={styles.box} />
    //   <View style={styles.box} />
    //   <View style={styles.box} />
    //   <StatusBar style="auto" />
    // </View>
    // Esempio 2
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerBoxTop}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={styles.centainerBoxCenter}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <View style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
  },
  centainerBoxCenter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerBoxTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  box: {
    height: 30,
    width: 30,
    backgroundColor: "red",
    margin: 10,
  },
});
