import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
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
import { ScreenFC } from "../models/ScreenFC";
import { useDispatch } from "react-redux";
import { addBookmark } from "../redux/actions/bookmarkActions";

const HomeScreen: ScreenFC<"Home"> = ({ navigation, route }) => {
  const [state, setState] = useState<Array<Data>>([]);
  const [page, setPage] = useState<number>(1);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async (page: number = 1) => {
    try {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const res = await data.json();
      if (data.status === 200) {
        setState(
          res.results.length > 5 ? res.results.slice(0, 5) : res.results
        ),
          setPage(page);
      }
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar style="auto" />
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
            style={{ marginBottom: 120 }}
            data={state}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card
                item={item}
                index={index}
                onPress={
                  () => {
                    navigation.navigate("Detail", { id: item.id.toString() });
                    dispatch(addBookmark(item));
                  }
                }
              />
            )}
          />
        ) : (
          <View style={styles.cardContainer}>
            <Text>No result</Text>
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
