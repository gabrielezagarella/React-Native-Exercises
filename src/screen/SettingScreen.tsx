import React, { useCallback, useEffect, useMemo, useState, memo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ScreenFC from "../models/ScreenFC";
import ToDo from "../components/ToDo/ToDo";
import Title from "../components/Title/Title";
import Count from "../components/Count/Count";
import CustomButton from "../components/Count/CustomButton/CustomButton";

type A = "Home" | "Setting" | "Detail";
const test: A = "Setting";

const SettingScreen: ScreenFC<"Setting"> = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<string>>([]);
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);

  const addTodo = () => {
    console.log("addTodo todos", todos);
    setTodos((t) => [...t, "New Todo"]);
  };

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const renderToDo = useMemo(() => {
    console.log("useMemo renderToDo");

    return <ToDo todos={todos} addTodo={() => addTodo()} />;
  }, [todos]);

  const incremantAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <View style={styles.container}>
      <Text>Sono in SettingScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
      {/* {renderToDoWithoutMemo()}*/}
      {renderToDo}
      <View>
        <Text> Count: {count}</Text>
        <Button onPress={increment} title="+" />
      </View>

      <Title />
      <Count text="Age" count={age} />
      <CustomButton title="Increment Age" handleClick={incremantAge} />
      <Count text="Salary" count={salary} />
      <CustomButton title="Increment Salary" handleClick={incrementSalary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default SettingScreen;
