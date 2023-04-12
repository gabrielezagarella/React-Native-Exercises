import React from "react";
import { Button, Text } from "react-native";

type Props = Record<"todos", Array<string>> & Record<"addTodo", () => void>;

const ToDo: React.FC<Props> = ({ todos, addTodo }) => {
  console.log("Render ToDo");

  return (
    <>
      <Text>My Todos</Text>
      {todos.map((todo, index) => {
        return <Text key={index}>{todo}</Text>;
      })}
      <Button onPress={addTodo} title="Add Todo" />
    </>
  );
};

export default ToDo;
