import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ChatList = ({ navigation }) => {
  return (
    <View>
      <Text>ChatList Screen</Text>
      <Button title="Chat Screen" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatList;
