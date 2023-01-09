import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { colors, photos } from "../utils";

const Chat = () => {
  const [msgTxt, setMsgTxt] = useState("");

  const handleSendMsg = useCallback(() => {
    setMsgTxt("");
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={photos.bgImg}
          style={styles.flex}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign name="plus" size={24} color={colors.secondary} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={msgTxt}
            onChangeText={setMsgTxt}
            onSubmitEditing={handleSendMsg}
          />
          {msgTxt ? (
            <TouchableOpacity
              onPress={handleSendMsg}
              activeOpacity={0.8}
              style={styles.sendBtn}
            >
              <FontAwesome name="send" size={18} color={colors.white} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSendMsg} activeOpacity={0.8}>
              <AntDesign name="camera" size={24} color={colors.secondary} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 50,
    height: "100%",
    marginHorizontal: 12,
    paddingHorizontal: 12,
  },
  sendBtn: {
    width: 35,
    height: 35,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
});

export default Chat;
