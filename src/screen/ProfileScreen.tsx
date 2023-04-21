import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Linking } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useDispatch, useSelector } from "react-redux";
import { AccountProps, logout } from "../redux/actions/accountActions";

const ProfileScreen: CustomScreenFC<"Profile"> = ({ navigation }) => {
  const [image, setImage] = useState<string>();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const dispatch = useDispatch();

  const { account } = useSelector(
    (state: { accountReducer: AccountProps }) => state.accountReducer
  );

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  const supportedURL = "https://google.com";

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(supportedURL);
    if (supported) {
      // await Linking.openURL(supportedURL);
      // await Linking.openSettings();
      // await Linking.openURL("mailto:lenda.ortiz@example.com");
      await Linking.openURL("tel:(257)832-5149");
    }
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to Setting"
        color="red"
        onPress={() => navigation?.navigate("Setting", { setting: "Default" })}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Text>Email: {account.email}</Text>
      <Text>Logged: {String(account?.isLogged)} ?</Text>
      <Button title="Choice photo" color="blue" onPress={pickImage} />
      <Button title="Open Link" color="blue" onPress={handlePress} />
      <Button title="Logout" color="blue" onPress={() => dispatch(logout())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
