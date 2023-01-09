import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import { Chat } from "../screens";
import { colors } from "../utils";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: colors.white } }}
    >
      <Stack.Screen
        name="ChatList"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
