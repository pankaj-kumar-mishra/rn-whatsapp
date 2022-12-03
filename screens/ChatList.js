import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button } from "react-native";

const ChatList = ({ navigation }) => {
  return (
    <View>
      <Text>ChatList Screen</Text>
      <Button title="Chat Screen" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

ChatList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

export default ChatList;
