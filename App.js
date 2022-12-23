import "react-native-gesture-handler";

import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, UIManager, Platform, LogBox } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { RootNavigator } from "./navigation";
import { fontFamilies } from "./utils";
import { store } from "./store";

// LogBox.ignoreLogs(["AsyncStorage has been extracted"]);

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// For custom SplashScreen we can change in App.json
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const prepare = async () => {
    try {
      await Font.loadAsync(fontFamilies);
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
    <Provider store={store}>
      <SafeAreaProvider onLayout={onLayout}>
        <SafeAreaView
          //edges={["top", "right", "bottom", "left"]}
          style={styles.container}
        >
          <StatusBar style="auto" />
          <RootNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
