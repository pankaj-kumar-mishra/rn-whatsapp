import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { StartUpScreen } from "../screens";

const RootNavigator = () => {
  const { token, didTryAuthLogin } = useSelector(state => state.auth);
  const isAuthenticated = token;

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <MainNavigator />
      ) : didTryAuthLogin ? (
        <AuthNavigator />
      ) : (
        <StartUpScreen />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
