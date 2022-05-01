import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  const FullBox = (item: number[]) => {
    return item.map(() => (
      <View style={styles.box}>
        <View style={styles.fullBox} />
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerBox}>{FullBox([1, 2])}</View>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "flex-end" }}>
          <View style={styles.box} />
        </View>
        <View style={{ alignItems: "center" }}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: "pink",
              },
            ]}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <View style={styles.box} />
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={{ flexDirection: "row" }}>{FullBox([1, 2])}</View>
        <View style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
  },
  containerBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginTop: 20,
  },
  fullBox: {
    height: 30,
    width: 30,
    backgroundColor: "yellow",
    borderRadius: 30,
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
  },
  box: {
    height: 60,
    width: 60,
    backgroundColor: "red",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
