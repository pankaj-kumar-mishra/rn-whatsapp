import React, { useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useDispatch } from "react-redux";
import { authenticate, setDidTryAuthLogin } from "../store";
import { colors, getAuthDataFromStorage, getUserData, photos } from "../utils";

const StartUpScreen = () => {
  const dispatch = useDispatch();

  const handleTryLoginUsingToken = async () => {
    try {
      const authData = await getAuthDataFromStorage();
      if (!authData) {
        dispatch(setDidTryAuthLogin());
        return;
      }
      if (authData) {
        const { token, userId, expiryDate } = authData;
        if (new Date(expiryDate) <= new Date() || !token || !userId) {
          console.log("Token Expired");
          dispatch(setDidTryAuthLogin());
        } else {
          const userData = await getUserData(userId);
          dispatch(authenticate({ token, userData }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleTryLoginUsingToken();
  }, []);

  return (
    <ImageBackground source={photos.splash} style={styles.bgImg}>
      <StatusBar barStyle={"dark-content"} />
      <ActivityIndicator
        size="large"
        color={colors.white}
        style={styles.loader}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
  },
  loader: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
  },
});

export default StartUpScreen;
