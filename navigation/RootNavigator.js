import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { StartUpScreen } from "../screens";
import { refreshJwtToken } from "../utils";

const RootNavigator = () => {
  const { token, didTryAuthLogin } = useSelector(state => state.auth);
  const isAuthenticated = token;

  useEffect(() => {
    if (isAuthenticated) {
      refreshJwtToken();
    }
  }, [isAuthenticated]);

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
