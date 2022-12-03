import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
} from "react-native";
import { colors, fonts, photos, spacing } from "../utils";
import { SignUpForm, SignInForm } from "../components";

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsSignUp(prev => !prev);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "height" : undefined}
        keyboardVerticalOffset={100}
      >
        <View style={styles.logoContainer}>
          <Image source={photos.logo} style={styles.logo} />
        </View>

        {isSignUp ? <SignUpForm /> : <SignInForm />}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleForm}
          style={styles.linkContainer}
        >
          <Text style={styles.link}>{`Switch to ${
            isSignUp ? "Sign In" : "Sign Up"
          }`}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.x5,
    backgroundColor: colors.white,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: "50%",
    resizeMode: "contain",
  },
  linkContainer: {
    marginTop: spacing.x2,
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    fontFamily: fonts.SecondaryRegular,
    color: colors.link,
    letterSpacing: 0.3,
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AuthScreen;
