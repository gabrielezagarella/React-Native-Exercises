import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RootStackParams from "../models/RootStackParams";
import DetailScreen from "../screen/DetailScreen";
import HomeScreen from "../screen/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screen/Profile";

const RootStack = createStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator();

const HomeStack: React.FC = () => {
  return (
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
    </RootStack.Navigator>
  );
};
const DrawerMenu: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerMenu;
