import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ScreenFC } from "../models/ScreenFC";

const Login: ScreenFC<"Login"> = ({ navigation }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Accedi</Text>
      <TextInput
        placeholder="email"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="password"
        onChangeText={(value) => setPassword(value)}
      />
      <Button title="Accedi" color="blue" />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Non hai un account?</Text>
        <Button
          title="Registrati"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default Login;
