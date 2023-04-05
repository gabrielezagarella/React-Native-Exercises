import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RootStackParams from "../models/RootStackParams";
import DetailScreen from "../screen/DetailScreen";
import HomeScreen from "../screen/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screen/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screen/Favorites";
import SettingScreen from "../screen/SettingScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RootStack = createStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerMenu: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Homepage">
        <Drawer.Screen
          name="Homepage"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Setting" component={SettingScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerMenu;
