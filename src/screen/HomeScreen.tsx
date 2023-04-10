import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  SafeAreaView,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import Card from "../components/Card/Card";
import { Data } from "../models/Data";
import ScreenFC from "../models/ScreenFC";
import CustomInput from "../components/CustomInput/CustomInput";

const HomeScreen: ScreenFC<"Home"> = ({ navigation }) => {
  const [state, setState] = useState<Array<Data>>([]);
  const [page, setPage] = useState<number>(1);
  const [getValue, setValue] = useState<string>();
  const [render, setRender] = useState<number>(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (page: number = 1) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const res = await data.json();
      // console.log("res", res.results);
      data.status === 200 && (setState(res.results), setPage(page));
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  useEffect(() => {
    console.log("home");
  }, []);

  const RenderInput = useMemo(() => {
    return (
      <>
        <CustomInput
          placeholder="Insert name"
          showName={(name) => {
            console.log("name", name), setValue(name);
          }}
        />
        <Text>{getValue}</Text>
      </>
    );
  }, [getValue]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar style="auto" />
      {/* <CustomInput
        placeholder="Insert name"
        showName={(name) => {
          console.log("name", name), setValue(name);
        }}
      />
      <Text>{getValue}</Text> */}
      {RenderInput}
      <Button
        title="Render"
        color="yellow"
        onPress={() => setRender(render + 1)}
      />
      <Text>Click to re render {render}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Indietro"
          color="red"
          disabled={page === 1 && true}
          onPress={() => getData(page - 1)}
        />
        <Button
          title="Avanti"
          color="blue"
          disabled={state.length < 1}
          onPress={() => getData(page + 1)}
        />
      </View>
      <View style={styles.shadow}>
        {state.length > 1 ? (
          <FlatList
            data={state}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card
                item={item}
                index={index}
                onPress={() =>
                  navigation.navigate("Detail", {
                    id: item.id.toString(),
                    name: item.name,
                  })
                }
              />
            )}
          />
        ) : (
          <View style={styles.cardContainer}>
            <Text>Nessun risultato</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(79,172,217)",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  shadow: {
    elevation: 2,
    shadowColor: "black",
    shadowOffset: {
      height: 20,
      width: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  cardContainer: {
    backgroundColor: "#fff",
    height: 170,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
