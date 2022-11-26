import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// For custom SplashScreen we can change in App.json
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const prepare = async () => {
    try {
      await Font.loadAsync({
        boldP: require("./assets/fonts/Merriweather-Bold.ttf"),
        regularP: require("./assets/fonts/Merriweather-Regular.ttf"),
        lightP: require("./assets/fonts/Merriweather-Light.ttf"),
        regularS: require("./assets/fonts/PatrickHand-Regular.ttf"),
        regularT: require("./assets/fonts/RubikGlitch-Regular.ttf"),
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
    <SafeAreaProvider style={styles.container} onLayout={onLayout}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={{ fontFamily: "regularT" }}>Hello, Welcome Pankaj</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
