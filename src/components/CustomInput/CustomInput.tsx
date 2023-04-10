import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { TextInput, View, Text, StyleSheet } from "react-native";

type key = "placeholder";

type Props = Record<key, string> &
  Partial<Record<"showName", (name: string) => void>>;

//EQUIVALENT
interface P {
  placeholder: string;
  showName?: (name: string) => void;
}

const CustomInput: React.FC<Props> = ({ placeholder, showName }) => {
  const [name, setName] = useState("");
  const [showValue, setShowValue] = useState<boolean>(false);

  useEffect(() => {
    showName && showName(name);
  }, [name]);

  // useEffect(() => {
  //   console.log("call component");
  // }, [name]);

  // useFocusEffect(() => {
  //   console.log("focus");
  //   return console.log("no-focus");
  // });

  const getName = (i: string) => {
    setName(i);
    showName && showName(name);
  };

  const renderValue = () => {
    return (
      showValue &&
      name.length > 0 && (
        <Text style={[styles.text, { marginTop: 20 }]}>{name}</Text>
      )
    );
  };
  
  console.log("Item re-render");

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        placeholder={placeholder}
        onChangeText={(i) => getName(i)}
        value={name}
      />
      {renderValue()}
      <View style={styles.containerButton}>
        <View>
          <Button
            title="Show"
            color="blue"
            onPress={() => setShowValue(true)}
          />
        </View>
        <View>
          <Button
            title="Cancel"
            color="red"
            onPress={() => {
              setName(""), setShowValue(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
  },
  containerButton: {
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default CustomInput;
