import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ChatList, Settings } from "../screens";
import { colors, fonts } from "../utils";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inActive,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={ChatList}
        options={{
          tabBarLabel: "ChatList",
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingTop: 4,
  },
  tabBarItem: {
    height: 50,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.SecondaryRegular,
  },
});

export default BottomTabs;
