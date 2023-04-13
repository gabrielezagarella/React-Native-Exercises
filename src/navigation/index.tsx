import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
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
import ROUTES from "./routes";
import { useSelector } from "react-redux";
import { BookmarkProps } from "../redux/actions/bookmarkActions";

const RootStack = createStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "rgb(79,172,217)" },
        }}
      />
      <RootStack.Screen name={ROUTES.Detail} component={DetailScreen} />
      <RootStack.Screen name={ROUTES.Favorite} component={Favorites} />
    </RootStack.Navigator>
  );
};

const TabNavigation: React.FC = () => {
  const { bookmarks } = useSelector(
    (state: { bookmarkReducer: BookmarkProps }) => state.bookmarkReducer
  );

  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParams, ROUTES>>();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.Home}
      screenOptions={{
        tabBarActiveTintColor: "#fc8386",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={ROUTES.HomeStack}
        component={HomeStack}
        listeners={{
          tabPress: () => {
            navigate("HomeStack");
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.Favorite}
        component={Favorites}
        options={{
          headerTintColor: "red",
          headerStyle: { backgroundColor: "#fc8386" },
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
          tabBarBadge: bookmarks.length > 0 ? bookmarks.length : undefined,
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
          name={ROUTES.Homepage}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name={ROUTES.Setting} component={SettingScreen} />
        <Drawer.Screen name={ROUTES.Profile} component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerMenu;
