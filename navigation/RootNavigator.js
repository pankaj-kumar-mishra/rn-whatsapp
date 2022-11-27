import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
