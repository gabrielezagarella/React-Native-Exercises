import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingScreen from "../screen/SettingScreen";
import RootStackParams from "../models/RootStackParams";
import DetailScreen from "../screen/DetailScreen";
import HomeScreen from "../screen/HomeScreen";

const RootStack = createStackNavigator<RootStackParams>();

const NavigationProvider: React.FC = () => {
  return (
    <NavigationContainer
    //  onStateChange={(navigation) => console.log(navigation)}
    >
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "rgb(79,172,217)" },
          }}
        />
        <RootStack.Screen name="Detail" component={DetailScreen} />
        <RootStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: true,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationProvider;
