import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const RootNavigator = () => {
  const { token } = useSelector(state => state.auth);
  const isAuthenticated = token;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
