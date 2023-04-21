import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { ScreenFC } from "../models/ScreenFC";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/actions/accountActions";

const SignUp: ScreenFC<"SignUp"> = ({ navigation }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Registrati</Text>
      <TextInput
        placeholder="email"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="password"
        onChangeText={(value) => setPassword(value)}
      />
      <Button
        title="Registrati"
        color="red"
        onPress={() => {
          email &&
            password &&
            dispatch(signUp({ email, password, isLogged: true }));
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Hai un account?</Text>
        <Button title="Accadi" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
};

export default SignUp;
