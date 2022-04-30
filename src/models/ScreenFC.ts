import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import RootStackParams from "./RootStackParams";
type ScreenNavigationProps<T extends keyof RootStackParams> = {
  navigation: StackNavigationProp<RootStackParams, T>;
  route: RouteProp<RootStackParams>;
};
type ScreenFC<S extends keyof RootStackParams> = React.FC<
  ScreenNavigationProps<S>
>;
export default ScreenFC;
