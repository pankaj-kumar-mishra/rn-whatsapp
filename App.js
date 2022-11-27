import "react-native-gesture-handler";

import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { RootNavigator } from "./navigation";

// For custom SplashScreen we can change in App.json
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const prepare = async () => {
    try {
      await Font.loadAsync({
        primaryBold: require("./assets/fonts/Merriweather-Bold.ttf"),
        primaryRegular: require("./assets/fonts/Merriweather-Regular.ttf"),
        primaryLight: require("./assets/fonts/Merriweather-Light.ttf"),
        SecondaryRegular: require("./assets/fonts/PatrickHand-Regular.ttf"),
        TertiaryRegular: require("./assets/fonts/RubikGlitch-Regular.ttf"),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setAppIsReady(true);
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setAppIsReady(true);
    // }, 2000);

    prepare();
  }, []);

  // It will trigger on layout change of applied element
  const onLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayout}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
